import type {PokemonFromAPI} from './pokemon.d.ts'
import type {PokemonTypeFromAPI} from './pokemon-type.d.ts'
import type { SVG } from './svg.d.ts'
import type { PNG } from './png.d.ts'

export type PokemonFromAPI;
export type PokemonTypeFromAPI;
export type SVG;
export type PNG;

export type Types = [
  PNG,
  PokemonFromAPI,
  PokemonTypeFromAPI,
  SVG,
  ...any[]
];
