import { resetWrapper, styleWrapper } from '../helpers';
import { getTimestamp } from '../helpers/getTimestamp';

const timestamp = `[${getTimestamp()}]`;

export const success = (message: string) => {
  const statusMsg = 'SUCCESS ';

  return console.log(
    `\n`,
    styleWrapper['fgGray'],
    timestamp,
    resetWrapper,
    styleWrapper['bgGreen'],
    styleWrapper['bold'],
    statusMsg,
    resetWrapper,
    styleWrapper['fgGreen'],
    message,
    resetWrapper
  );
};
