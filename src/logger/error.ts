import { combineParams, getLoggingArgs, getTimestamp } from '../helpers/';
import { StatusType } from '../typings/LoggerTypes';
import { ConfigType } from '../setWizardConfig';
import { getConfig } from '../helpers/getConfig';

export const error = (message: string, userConfigOverride?: ConfigType): string => {
  const timestamp = `[${getTimestamp()}]`;
  const statusType: StatusType = 'error';

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
