import { add } from '../src/index';

test('should return zero when ""', () => {
  expect(add("")).toEqual(0);
});

test('should return 5 when "3,2"', () => {
  expect(add("3,2")).toEqual(5);
});