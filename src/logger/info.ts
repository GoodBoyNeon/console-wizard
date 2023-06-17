import { resetWrapper, styleWrapper } from '../helpers';
import { getTimestamp } from '../helpers/getTimestamp';

const timestamp = `[${getTimestamp()}]`;

export const info = (message: string) => {
  const statusMsg = 'INFO ';

  return console.log(
    `\n`,
    styleWrapper['fgGray'],
    timestamp,
    resetWrapper,
    styleWrapper['bgBlue'],
    styleWrapper['bold'],
    statusMsg,
    resetWrapper,
    styleWrapper['fgBlue'],
    message,
    resetWrapper
  );
};
