import { ConfigType } from '../wizardConfig';
import { resetWrapper, styleWrapper, styleWrapperType } from '.';

export interface LogDataType {
  timestamp: string;
  statusId: string;
  message: string;
}

interface StatusFromStatusIdType {
  error: string;
  warn: string;
  info: string;
  success: string;
}

interface ColorType {
  error: string;
  warn: string;
  info: string;
  success: string;
}

interface ColorFromStatusIdType {
  fg: ColorType;
  bg: ColorType;
}
const statusFromStatusId: StatusFromStatusIdType = {
  error: 'ERROR ',
  warn: 'WARN ',
  info: 'INFO ',
  success: 'SUCCESS ',
} as const;

const colorFromStatusId: ColorFromStatusIdType = {
  bg: {
    error: 'bgRed',
    info: 'bgBlue',
    success: 'bgGreen',
    warn: 'bgYellow',
  },
  fg: {
    error: 'fgRed',
    info: 'fgBlue',
    success: 'fgGreen',
    warn: 'fgYellow',
  },
};

export const getLoggingArgs = (config: ConfigType, logData: LogDataType) => {
  const args: string[] = [`\n`];
  const { includeTimestamp, includeStatus } = config;
  const { statusId } = logData;

  const statusMsg: string = statusFromStatusId[statusId as keyof StatusFromStatusIdType];
  const fgColor: string = colorFromStatusId.fg[statusId as keyof ColorType];
  const bgColor: string = colorFromStatusId.bg[statusId as keyof ColorType];

  if (includeTimestamp) args.push(...[styleWrapper['fgGray'], logData.timestamp, resetWrapper]);

  if (includeStatus)
    args.push(
      ...[
        styleWrapper[bgColor as keyof styleWrapperType],
        styleWrapper['bold'],
        statusMsg,
        resetWrapper,
      ]
    );

  args.push(...[styleWrapper[fgColor as keyof styleWrapperType], logData.message, resetWrapper]);

  return args;
};
