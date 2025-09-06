export interface PokemonBaseStat {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
}

export type PokemonBaseStats = {
	stats: PokemonBaseStat[];
};
