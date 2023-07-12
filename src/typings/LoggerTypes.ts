export type StatusType = 'success' | 'info' | 'warn' | 'error';

export type ColorType = {
  error: string;
  warn: string;
  info: string;
  success: string;
};

export type TableValue = string | number | undefined;

export type TableData = {
  [key: string]: TableValue;
};
