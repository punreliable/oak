interface NamedAPIResource {
	name: string;
	url: string;
}

interface GameIndex {
	game_index: number;
	generation: NamedAPIResource;
}

interface Name {
	language: NamedAPIResource;
	name: string;
}

interface Location {
	areas: NamedAPIResource[];
	game_indices: GameIndex[];
	id: number;
	name: string;
	names: Name[];
	region: NamedAPIResource;
}

export type { Location };
