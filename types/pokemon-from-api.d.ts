import type { Pokemon } from '@/types/pokemon';

export interface PokemonFromAPI {
	data: Pokemon;
	status: number;
}
