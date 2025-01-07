import type {PokemonFromAPI} from './pokemon.js';
import type {PokemonTypeFromAPI} from './pokemon-type.js';
import type { SVG } from './svg.js';
import type { PNG } from './png.js';

// export type PokemonFromAPI = any;
// export type PokemonTypeFromAPI = any;
// export type SVG = any;
// export type PNG = any;
export type Types = [
  PNG,
  PokemonFromAPI,
  PokemonTypeFromAPI,
  SVG,
  ...any[]
];
