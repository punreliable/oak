import type { EffectChange } from './effect-change';
import type { EffectEntry } from './effect-entry';
import type { FlavorTextEntry } from './flavor-text-entry';
import type { Language } from './language';
import type { NameEntry } from './name-entry';
import type { PNG } from './png.js';
import type { PokemonFromAPI } from './pokemon';
import type { PokemonTypeFromAPI } from './pokemon-type';
import type { PokemonAbilityFromAPI } from './pokemon-ability-from-api';
import type { PokemonAbilitiesListFromAPI } from './pokemon-abilities-list-from-api';
import type { SingleAbilityFromAPI } from './single-ability-from-api';
import type { SVG } from './svg.js';

export type Types = [
  EffectChange,
  EffectEntry,
  FlavorTextEntry,
  Language,
  NameEntry,
  PNG,
  PokemonFromAPI,
  PokemonAbilityFromAPI,
  PokemonTypeFromAPI,
  PokemonAbilitiesListFromAPI,
  SingleAbilityFromAPI,
  SVG,
  ...any[],
];
