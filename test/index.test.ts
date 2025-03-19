import { add } from "../src/index";

describe("add function input cases", () => {
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
    expect(() => add("1,-2")).toThrow("Negative numbers not allowed: -2");
  });

  test('should return 3 when "//;\n1;2"', () => {
    expect(add("//;\n1;2")).toEqual(3);
  });

  test('should return 0 when "//;"', () => {
    expect(add("//;")).toEqual(0);
  });

  test('should return 0 when "//;1"', () => {
    expect(add("//;1")).toEqual(0);
  });

  test('should return 1 when "//;\n1"', () => {
    expect(add("//;\n1")).toEqual(1);
  });

  test('should throw negative numbers not allowed when multiple negative numbers "-2, -50"', () => {
    expect(() => add("1,-2, -50")).toThrow(
      "Negative numbers not allowed: -2,-50"
    );
  });
});

describe("add function - null and empty input cases", () => {
  test("should return 0 for null input", () => {
    expect(add(null as unknown as string)).toBe(0);
  });

  test("should return 0 for undefined input", () => {
    expect(add(undefined)).toBe(0);
  });

  test("should return 0 for empty string input", () => {
    expect(add("")).toBe(0);
  });

  test("should return 0 for input with only whitespace", () => {
    expect(add("   ")).toBe(0);
  });
});
