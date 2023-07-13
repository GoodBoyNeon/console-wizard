import { filterDuplicates } from './filterDuplicates';
import { getConfig } from './getConfig';
import { TableData, TableValue } from '../typings/LoggerTypes';
import { ConfigType } from '../setWizardConfig';
import { resetWrapper, styleWrapper } from './styles';
import { capitalize } from './capitalize';

const getMaxLengths = (data: TableData[], rows: string[]): number[] => {
  return rows.map(row => {
    const maxRowLength = row.length;
    const maxColumnLengths = data.map(item => String(item[row]).length);

    return Math.max(maxRowLength, ...maxColumnLengths);
  });
};
const getKeyLengths = (data: TableData[], keys: string[]) => {
  return keys.reduce((obj, key, i) => {
    obj[key] = getMaxLengths(data, keys)[i] ?? 0;

    return obj;
  }, {} as Record<string, number>);
};
const getValueLengths = (data: TableData[], rows: string[], values: TableValue[][]) => {
  const valueLengths: Record<string | number | symbol, number> = {};
  const columnMaxLengths = getMaxLengths(data, rows);

  values.forEach(elements => {
    elements.forEach((element, i) => {
      if (!element) return;
      valueLengths[element] = columnMaxLengths[i] || 0;
    });
  });
  return valueLengths;
};

const generateTopRow = (
  data: TableData[],
  topRowElements: string[],
  values: TableValue[][],
  config: ConfigType
) => {
  const { tableBorder, includeSN } = config;

  if (!tableBorder) {
    throw new RangeError('tableBorder not found');
  }

  /* Print the top border */

  let row: string = `${tableBorder.cornerTL}`;

  const valuesLength = values.length;
  const snMaxLength = String(valuesLength).length < 3 ? 3 : String(valuesLength).length;
  if (includeSN) {
    row += tableBorder.edgeHorizontal.repeat(snMaxLength + 2);
    row += tableBorder.intersectionBLR;
  }

  // Add vertical edge characters depending on the maximum length of the elements, after
  // each element, add a `intersection` character.
  const maxLengths = getMaxLengths(data, topRowElements);
  maxLengths.forEach(length => {
    row += `${tableBorder.edgeHorizontal.repeat(length + 2)}${tableBorder.intersectionBLR}`;
  });

  // Replace the last intersection character with a top-right corner character
  row = row.slice(0, -1) + `${tableBorder.cornerTR}\n`;

  /* Print the Keys */

  row += `${tableBorder.edgeVertical}`;

  if (includeSN) {
    row += ` ${styleWrapper.bold}S.N${resetWrapper} ${' '.repeat(snMaxLength - 3)}`;
    row += tableBorder.edgeVertical;
  }

  const elementLengths = getKeyLengths(data, topRowElements);

  topRowElements.forEach(element => {
    const rowTotalLength = elementLengths[element];

    if (!rowTotalLength) return;

    const noSpaces = rowTotalLength - element.length;
    row += ` ${styleWrapper.bold}${capitalize(element)}${resetWrapper}${' '.repeat(noSpaces + 1)}`;
    row += tableBorder.edgeVertical;
  });

  /* Print end border */

  row += `\n${tableBorder.intersectionTBL}`;

  if (includeSN) {
    row += tableBorder.edgeHorizontal.repeat(snMaxLength + 2);
    row += tableBorder.intersectionCenter;
  }

  topRowElements.forEach(element => {
    const rowTotalLength = elementLengths[element] || 0;

    row += `${tableBorder.edgeHorizontal.repeat(rowTotalLength + 2)}${
      tableBorder.intersectionCenter
    }`;
  });

  row = row.slice(0, -1) + `${tableBorder.intersectionTBR}`;
  row += '\n';

  return row;
};

const generateBody = (
  data: TableData[],
  rows: string[],
  bodyElements: (string | number | undefined)[][],
  config: ConfigType
) => {
  let body: string = '';

  const { tableBorder, includeSN } = config;
  if (!tableBorder) return;

  const valuesLength = bodyElements.length;
  const snMaxLength = String(valuesLength).length < 3 ? 3 : String(valuesLength).length;

  bodyElements.forEach((elements, i) => {
    const columnLengths = getValueLengths(data, rows, bodyElements);

    if (includeSN) {
      body += `${tableBorder.edgeVertical} ${i + 1}${' '.repeat(
        snMaxLength - String(i + 1).length + 1
      )}`;
    }

    body += `${tableBorder.edgeVertical} `;
    elements.forEach(column => {
      if (!column) return;

      const rowTotalLength = columnLengths[column] || 0;

      let columnLength = 0;
      if (typeof column === 'string') columnLength = column.length;
      if (typeof column === 'number') columnLength = column.toString().length;

      const noSpaces = rowTotalLength + 1 - columnLength;
      body += `${column}${' '.repeat(noSpaces)}${tableBorder.edgeVertical} `;
    });

    body += `\n${tableBorder.intersectionTBL}`;

    if (includeSN) {
      body += `${tableBorder.edgeHorizontal.repeat(snMaxLength + 2)}`;
      body += tableBorder.intersectionCenter;
    }

    elements.forEach(column => {
      if (!column) return;
      const rowTotalLength = columnLengths[column] || 0;

      body += `${tableBorder.edgeHorizontal.repeat(rowTotalLength + 2)}${
        tableBorder.intersectionCenter
      }`;
    });

    body = body.slice(0, -1) + `${tableBorder.intersectionTBR} \n`;
  });
  body = body.slice(0, -2);
  body = body.substring(0, body.lastIndexOf('\n'));
  body += '\n';

  return body;
};

const generateEndBorder = (
  data: TableData[],
  topRowELements: string[],
  values: TableValue[][],
  config: ConfigType
) => {
  const { tableBorder, includeSN } = config;
  if (!tableBorder) return;

  const columnLengths = getMaxLengths(data, topRowELements);

  const valuesLength = values.length;
  const snMaxLength = String(valuesLength).length < 3 ? 3 : String(valuesLength).length;

  let border: string = '';

  border += tableBorder.cornerBL;

  if (includeSN) {
    border += `${tableBorder.edgeHorizontal.repeat(snMaxLength + 2)}`;
    border += tableBorder.intersectionTLR;
  }

  columnLengths.forEach(length => {
    border += tableBorder.edgeHorizontal.repeat(length + 2) + tableBorder.intersectionTLR;
  });

  border = border.slice(0, -1) + tableBorder.cornerBR;
  border += '\n';

  return border;
};

export const generateTable = (
  data: TableData[],
  configOverride?: Pick<ConfigType, 'tableBorder' | 'includeSN'>
): string => {
  let table: string = '';

  const config = getConfig(configOverride);
  const { tableBorder } = config;

  if (!tableBorder) {
    throw new RangeError('tableBorder is not defined');
  }

  const keys = data.map(dataObj => Object.keys(dataObj));
  const values = data.map(dataObj => Object.values(dataObj));
  const topRowElements = filterDuplicates(keys);

  table += generateTopRow(data, topRowElements, values, config);
  table += generateBody(data, topRowElements, values, config);
  table += generateEndBorder(data, topRowElements, values, config);

  return table;
};
