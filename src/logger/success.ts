import { combineParams, getLoggingArgs, getTimestamp } from '../helpers/';
import { ConfigType, userConfig } from '../wizardConfig';

const timestamp = `[${getTimestamp()}]`;

export const success = (message: string, userConfigOverride?: ConfigType) => {
  const statusMsg = 'SUCCESS ';

  const finalConfig: ConfigType = { ...userConfig, ...userConfigOverride };

  const loggingArgs = getLoggingArgs(finalConfig, {
    statusMsg,
    message,
    timestamp,
  });

  const args = combineParams(loggingArgs.join(' '));

  console.log(args);
};
