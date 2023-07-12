import { combineParams, getLoggingArgs, getTimestamp } from '../helpers/';
import { getConfig } from '../helpers/getConfig';
import { StatusType } from '../typings/LoggerTypes';
import { ConfigType } from '../setWizardConfig';

const timestamp = `[${getTimestamp()}]`;

export const warn = (message: string, userConfigOverride?: ConfigType): string => {
  const statusType: StatusType = 'warn';

  const config = getConfig(userConfigOverride);

  const loggingArgs = getLoggingArgs(config, {
    statusType,
    message,
    timestamp,
  });

  const args = combineParams(loggingArgs.join(' '));

  console.log(args);

  return message;
};
