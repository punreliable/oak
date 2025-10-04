interface NamedAPIResource {
	name: string;
	url: string;
}

interface Effect {
	effect: string;
	language: NamedAPIResource;
	short_effect: string;
}

interface FlavorText {
	language: NamedAPIResource;
	text: string;
	version_group: NamedAPIResource;
}

interface GameIndex {
	game_index: number;
	generation: NamedAPIResource;
}

interface ItemSprites {
	default: string;
}

export interface Item {
	attributes: NamedAPIResource[];
	baby_trigger_for: null;
	category: NamedAPIResource;
	cost: number;
	effect_entries: Effect[];
	flavor_text_entries: FlavorText[];
	fling_effect: null;
	fling_power: null;
	game_indices: GameIndex[];
	held_by_pokemon: any[];
	id: number;
	machines: any[];
	name: string;
	names: {
		language: NamedAPIResource;
		name: string;
	}[];
	sprites: ItemSprites;
}
