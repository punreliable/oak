import { it, expect } from 'vitest';
import { getRandomPokemon } from './getRandomPokemon';

it('should return a string with a length of 2', () => {
  const result = getRandomPokemon();
  expect(result.length).toBe(2);
});

it('should return a string between "01" and "151"', () => {
  const result = getRandomPokemon();
  expect(result).toMatch(/^(0[1-9]|[1-9][0-9]|1[0-5][0-1])$/);
});