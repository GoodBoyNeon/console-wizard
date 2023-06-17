import { convertTime } from '.';

export const getTimestamp = (): string => {
  const time = convertTime(new Date().toLocaleTimeString());
  const date = new Date().toLocaleDateString();

  return `${date} ${time}`;
};
