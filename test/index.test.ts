import { greet } from '../src/index';

test('should return greeting message', () => {
  expect(greet('World')).toBe('Hello, World!');
});