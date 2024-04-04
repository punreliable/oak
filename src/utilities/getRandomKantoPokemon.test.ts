import { it, expect } from 'vitest';
import { getRandomKantoPokemon } from './getRandomKantoPokemon';

it('should return a string with a length of 1', () => {
  const result = getRandomKantoPokemon();
  expect(result.length).toBe(1);
});

it('should return a string between "1" and "151"', () => {
  const result = getRandomKantoPokemon();
  expect(result).toMatch(/^(1[0-4][0-9]|15[0-1]|1[0-9]|[1-9])$/);
});