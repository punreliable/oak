import type { Language } from './language';
import type { EffectEntry } from './effect-entry';
import type { EffectChange } from './effect-change';
import type { FlavorTextEntry } from './flavor-text-entry';
import type { NameEntry } from './name-entry';
import type { VersionGroup } from './version-group';
import type { PokemonEntry } from './pokemon-entry';

export type SingleAbilityFromAPI = {
  effect_changes: EffectChange[];
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  generation: {
    name: string;
    url: string;
  };
  id: number;
  is_main_series: boolean;
  name: string;
  names: NameEntry[];
  pokemon: PokemonEntry[];
};
