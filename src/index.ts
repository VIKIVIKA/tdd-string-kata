export const add = (sToSum: string): number => {
  return sToSum
    .replace(/\n/g, ",")
    .split(",")
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
};
