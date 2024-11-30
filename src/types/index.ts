import type {Pokemon} from './pokemon.d.ts'
import type {PokemonType} from './pokemon-type.d.ts'
import type { SVG } from './svg.d.ts'

export type Pokemon;
export type PokemonType;
export type SVG;

export type Types = [
  Pokemon,
  PokemonType,
  SVG,
  ...any[]
];
