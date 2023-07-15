import { convertTime } from '.';

export const getTimestamp = (): string => {
  const time = convertTime(new Date().toLocaleTimeString());
  // const date = new Date().toLocaleDateString()
  const date = new Date().toLocaleDateString('default', { month: 'numeric', day: 'numeric' });

  return `${date} ${time}`;
};
