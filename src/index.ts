export const add = (sToSum: string): number => {
  const numbersToAdd = sToSum
  .replace(/\n/g, ",")
  .split(",")
  .map(Number);
  const negatives = numbersToAdd.filter(num => num < 0);
  console.log(`negative numbers not allowed: ${negatives.join(",")}`);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }
  return numbersToAdd.reduce((sum, num) => sum + num, 0);
};
