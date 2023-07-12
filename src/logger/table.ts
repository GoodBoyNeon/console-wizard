import { generateTable } from '../helpers/generateTable';
import { ConfigType } from '../setWizardConfig';
import { TableData } from '../typings/LoggerTypes';

export const table = (
  data: TableData[],
  configOverride?: Pick<ConfigType, 'tableBorder' | 'includeSN'>
) => {
  const table = generateTable(data, configOverride);

  console.log(table);
};
