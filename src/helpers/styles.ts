export interface styleWrapperType {
  reset: string;
  bold: string;
  dim: string;
  italic: string;
  underscore: string;
  blink: string;
  reverse: string;
  hidden: string;
  strike: string;

  fgBlack: string;
  fgRed: string;
  fgGreen: string;
  fgYellow: string;
  fgBlue: string;
  fgMagenta: string;
  fgCyan: string;
  fgWhite: string;
  fgGray: string;
  bgBlack: string;
  bgRed: string;
  bgGreen: string;
  bgYellow: string;
  bgBlue: string;
  bgMagenta: string;
  bgCyan: string;
  bgWhite: string;
  bgGray: string;
}

export const styleWrapper: styleWrapperType = {
  reset: '\x1b[0m',
  bold: '\x1b[1m', // This lightens the color as a side-effect
  dim: '\x1b[2m',
  italic: '\x1b[3m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
  strike: '\x1b[9m',

  fgBlack: '\x1b[30m',
  fgRed: '\x1b[31m',
  fgGreen: '\x1b[32m',
  fgYellow: '\x1b[33m',
  fgBlue: '\x1b[34m',
  fgMagenta: '\x1b[35m',
  fgCyan: '\x1b[36m',
  fgWhite: '\x1b[37m',
  fgGray: '\x1b[90m',

  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
  bgGray: '\x1b[100m',
} as const;

export const resetWrapper = '\x1b[0m';
