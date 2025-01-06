import { it, expect } from 'vitest';
import prettyName from './prettyName';

it('should capitalize the first letter of a name', () => {
  const name = 'john';
  const result = prettyName(name);
  expect(result).toBe('John');
});
