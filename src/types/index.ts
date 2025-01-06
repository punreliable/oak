import type {PokemonFromAPI} from './pokemon.d.ts';
import type {PokemonTypeFromAPI} from './pokemon-type.d.ts';
import type { SVG } from './svg.d.ts';
import type { PNG } from './png.d.ts';

export type PokemonFromAPI = any;
export type PokemonTypeFromAPI = any;
export type SVG = any;
export type PNG = any;
export type Types = [
  PNG,
  PokemonFromAPI,
  PokemonTypeFromAPI,
  SVG,
  ...any[]
];
