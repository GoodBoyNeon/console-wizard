import { combineParams, getLoggingArgs, getTimestamp } from '../helpers/';
import { ConfigType, userConfig } from '../wizardConfig';

const timestamp = `[${getTimestamp()}]`;

export const error = (message: string, userConfigOverride?: ConfigType): string => {
  const statusId = 'error';

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
