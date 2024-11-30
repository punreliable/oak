import type {Pokemon} from './pokemon.d.ts'
import type {PokemonType} from './pokemon-type.d.ts'
import type { SVG } from './svg.d.ts'
import type { PNG } from './png.d.ts'

export type PokemonType;
export type SVG;
export type PNG;

export type Types = [
  PNG,
  Pokemon,
  PokemonType,
  SVG,
  ...any[]
];
