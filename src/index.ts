export const add = (input: string): number => {
  let delimiter = /[,]/;

  // Support custom delimiter
  if (input.startsWith("//")) {
    const parts = input.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    input = parts.slice(1).join("\n");
  }

  const numbersToAdd = input.split(delimiter).map(Number);
  const negatives = numbersToAdd.filter((num) => num < 0);
  console.log(`negative numbers not allowed: ${negatives.join(",")}`);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }
  return numbersToAdd.reduce((sum, num) => sum + num, 0);
};
