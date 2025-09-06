interface PokemonColor {
	name: string;
	url: string;
}

interface EggGroup {
	name: string;
	url: string;
}

interface EvolutionChain {
	url: string;
}

interface Language {
	name: string;
	url: string;
}

interface Version {
	name: string;
	url: string;
}

interface FlavorTextEntry {
	flavor_text: string;
	language: Language;
	version: Version;
}

interface Genera {
	genus: string;
	language: Language;
}

interface Generation {
	name: string;
	url: string;
}

interface GrowthRate {
	name: string;
	url: string;
}

interface Habitat {
	name: string;
	url: string;
}

interface Name {
	language: Language;
	name: string;
}

interface PalParkEncounter {
	area: {
		name: string;
		url: string;
	};
	base_score: number;
	rate: number;
}

interface Pokedex {
	name: string;
	url: string;
}

interface PokedexNumber {
	entry_number: number;
	pokedex: Pokedex;
}

interface Shape {
	name: string;
	url: string;
}

interface Pokemon {
	name: string;
	url: string;
}

interface Variety {
	is_default: boolean;
	pokemon: Pokemon;
}

export interface PokemonSpecies {
	base_happiness: number;
	capture_rate: number;
	color: PokemonColor;
	egg_groups: EggGroup[];
	evolution_chain: EvolutionChain;
	evolves_from_species: {
		name: string;
		url: string;
	} | null;
	flavor_text_entries: FlavorTextEntry[];
	form_descriptions: any[];
	forms_switchable: boolean;
	gender_rate: number;
	genera: Genera[];
	generation: Generation;
	growth_rate: GrowthRate;
	habitat: Habitat;
	has_gender_differences: boolean;
	hatch_counter: number;
	id: number;
	is_baby: boolean;
	is_legendary: boolean;
	is_mythical: boolean;
	name: string;
	names: Name[];
	order: number;
	pal_park_encounters: PalParkEncounter[];
	pokedex_numbers: PokedexNumber[];
	shape: Shape;
	varieties: Variety[];
}
