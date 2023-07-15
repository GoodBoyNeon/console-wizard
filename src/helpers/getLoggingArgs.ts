import { ConfigType } from '../setWizardConfig';
import { resetWrapper, styleWrapper, styleWrapperType } from '.';
import { ColorType, StatusType } from '../typings/LoggerTypes';

export interface LogDataType {
  timestamp: string;
  statusType: StatusType;
  message: string;
}

interface StatusText {
  error: string;
  warn: string;
  info: string;
  success: string;
}

interface StatusColors {
  fg: ColorType;
  bg: ColorType;
}

const statusText: StatusText = {
  error: 'ERROR ',
  warn: 'WARN ',
  info: 'INFO ',
  success: 'SUCCESS ',
} as const;

export const statusColors: StatusColors = {
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
  const args: string[] = [];
  const { includeTimestamp, includeStatus } = config;
  const { statusType } = logData;

  const statusMsg: string = statusText[statusType as keyof StatusText];
  const fgColor: string = statusColors.fg[statusType as keyof ColorType];
  const bgColor: string = statusColors.bg[statusType as keyof ColorType];

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
  args.push('\n');

  return args;
};
