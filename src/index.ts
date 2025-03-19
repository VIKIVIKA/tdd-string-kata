export const add = (sToSum: string): Number => {
  const numbersToSum: string[] = sToSum.split(",");
  let sum = 0;
  return numbersToSum.reduce((a,b) => Number(a)+Number(b), sum);
};