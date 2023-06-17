import { resetWrapper, styleWrapper } from '../helpers';
import { getTimestamp } from '../helpers/getTimestamp';

const timestamp = `[${getTimestamp()}]`;

export const warn = (message: string) => {
  const statusMsg = 'WARN ';

  return console.log(
    `\n`,
    styleWrapper['fgGray'],
    timestamp,
    resetWrapper,
    styleWrapper['bgYellow'],
    styleWrapper['bold'],
    statusMsg,
    resetWrapper,
    styleWrapper['fgYellow'],
    message,
    resetWrapper
  );
};
