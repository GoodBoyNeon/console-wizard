import { ConfigType } from '../wizardConfig';
import { resetWrapper, styleWrapper } from '.';

export interface LogDataType {
  timestamp: string;
  statusMsg: string;
  message: string;
}

export const getLoggingArgs = (config: ConfigType, logData: LogDataType) => {
  const args: string[] = [`\n`];
  const { includeTimestamp, includeStatus } = config;

  if (includeTimestamp) args.push(...[styleWrapper['fgGray'], logData.timestamp, resetWrapper]);

  if (includeStatus)
    args.push(...[styleWrapper['bgRed'], styleWrapper['bold'], logData.statusMsg, resetWrapper]);

  args.push(...[styleWrapper['fgRed'], logData.message, resetWrapper]);

  return args;
};
