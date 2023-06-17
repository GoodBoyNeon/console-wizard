import { resetWrapper, styleWrapper } from '../helpers';
import { getTimestamp } from '../helpers/getTimestamp';

const timestamp = `[${getTimestamp()}]`;

export const error = (message: string) => {
  const statusMsg = 'ERROR ';

  return console.log(
    `\n`,
    styleWrapper['fgGray'],
    timestamp,
    resetWrapper,
    styleWrapper['bgRed'],
    styleWrapper['bold'],
    statusMsg,
    resetWrapper,
    styleWrapper['fgRed'],
    message,
    resetWrapper
  );
};
