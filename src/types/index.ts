import type {Pokemon} from './pokemon.d.ts'
import type {PokemonType} from './pokemon-type.d.ts'

export type Pokemon;
export type PokemonType;

export type Types = [
  Pokemon,
  PokemonType,
  ...any[]
];
