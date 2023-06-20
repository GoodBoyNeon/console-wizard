import { combineParams, getLoggingArgs, getTimestamp } from '../helpers/';
import { ConfigType, userConfig } from '../wizardConfig';

const timestamp = `[${getTimestamp()}]`;

export const warn = (message: string, userConfigOverride?: ConfigType): string => {
  const statusId = 'warn';

  const finalConfig: ConfigType = { ...userConfig, ...userConfigOverride };

  const loggingArgs = getLoggingArgs(finalConfig, {
    statusId,
    message,
    timestamp,
  });

  const args = combineParams(loggingArgs.join(' '));

  console.log(args);

  return message;
};
