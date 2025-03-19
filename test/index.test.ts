import { add } from "../src/index";

test('should return zero when ""', () => {
  expect(add("")).toEqual(0);
});

test('should return 5 when "3,2"', () => {
  expect(add("3,2")).toEqual(5);
});

test('should return 10 when "2,2,2\n,2,2"', () => {
  expect(add("2,2,2\n,2,2")).toEqual(10);
});

test('should return 12 when "2,2,2\n\n\n\n,2,2,2"', () => {
  expect(add("2,2,2\n,2,2,2")).toEqual(12);
});

test('should throw negative numbers not allowed when "1,-2"', () => {
  expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
});

test('should throw negative numbers not allowed when "//;\n1;2"', () => {
  expect(add("//;\n1;2")).toEqual(3);
});

test('should throw negative numbers not allowed when "//;"', () => {
  expect(add("//;")).toEqual(0);
});

test('should throw negative numbers not allowed when multiple negative numbers "-2, -50"', () => {
  expect(() => add("1,-2, -50")).toThrow(
    "negative numbers not allowed: -2,-50"
  );
});
