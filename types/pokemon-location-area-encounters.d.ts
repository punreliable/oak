export interface PokemonLocationAreaEncounter {
	location_area: {
		name: string;
		url: string;
	};
	version_details: {
		encounter_details: {
			chance: number;
			condition_values: {
				name: string;
				url: string;
			}[];
			max_level: number;
			method: {
				name: string;
				url: string;
			};
			min_level: number;
		}[];
		max_chance: number;
		version: {
			name: string;
			url: string;
		};
	}[];
}
