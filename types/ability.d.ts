interface Language {
	name: string;
	url: string;
}

interface VersionGroup {
	name: string;
	url: string;
}

interface EffectEntry {
	effect: string;
	language: Language;
	short_effect: string;
}

interface FlavorTextEntry {
	flavor_text: string;
	language: Language;
	version_group: VersionGroup;
}

interface Pokemon {
	name: string;
	url: string;
}

interface PokemonAbility {
	is_hidden: boolean;
	pokemon: Pokemon;
	slot: number;
}

export interface AbilityDetail {
	effect_changes: any[];
	effect_entries: EffectEntry[];
	flavor_text_entries: FlavorTextEntry[];
	generation: {
		name: string;
		url: string;
	};
	id: number;
	is_main_series: boolean;
	name: string;
	names: {
		language: Language;
		name: string;
	}[];
	pokemon: PokemonAbility[];
}
