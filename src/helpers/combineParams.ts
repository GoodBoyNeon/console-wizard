export const combineParams = (...args: string[]): string => {
  return Array.from(args).join(' ');
};
