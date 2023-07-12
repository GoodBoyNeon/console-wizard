export const filterDuplicates = <T>(array: T[][]) => {
  const uniqueValues: T[] = [];

  for (const row of array) {
    for (const value of row) {
      if (!uniqueValues.includes(value)) {
        uniqueValues.push(value);
      }
    }
  }
  return uniqueValues;
};
