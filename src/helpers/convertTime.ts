export const convertTime = (time12h: string): string | undefined => {
  const [time, modifier] = time12h.split(' ');

  if (!time || !modifier) {
    console.error('TimeString does not follow correct format.');
    return;
  }

  let [hours = '00', minutes, seconds] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = (parseInt(hours, 10) + 12).toString();
  }

  return `${hours}:${minutes}:${seconds}`;
};
