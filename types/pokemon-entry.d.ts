export type PokemonEntry = {
	is_hidden: boolean;
	pokemon: {
		name: string;
		url: string;
	};
	slot: number;
};
