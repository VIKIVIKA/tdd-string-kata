import { add } from '../src/index';

test('should return zero when ""', () => {
  expect(add("")).toEqual(0);
});