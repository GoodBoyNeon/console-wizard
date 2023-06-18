import { ConfigType } from '../wizardConfig';
import { resetWrapper, styleWrapper } from '.';

interface LoggingDataType {
  timestamp: string;
  statusMsg: string;
  message: string;
}

export const getLoggingArgs = (config: ConfigType, data: LoggingDataType) => {
  const args: string[] = [`\n`];
  const { includeTimestamp, includeStatus } = config;

  if (includeTimestamp) args.push(...[styleWrapper['fgGray'], data.timestamp, resetWrapper]);

  if (includeStatus)
    args.push(...[styleWrapper['bgRed'], styleWrapper['bold'], data.statusMsg, resetWrapper]);

  args.push(...[styleWrapper['fgRed'], data.message, resetWrapper]);

  return args;
};
