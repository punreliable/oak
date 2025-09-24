import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Pokemon } from '@/types/pokemon';

interface PokemonState {
	popular: any[];
	new: any[];
	latest: any[];
	searched: any[];
	currentPokemon?: Pokemon; // {{change 1}} Add currentPokemon to the state
}


const initialState: PokemonState = {
	popular: [],
	new: [],
	latest: [],
	searched: [],
	currentPokemon: undefined, // {{change 2}} Initialize currentPokemon to undefined
};

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		fetchPokemonSuccess(state, action: PayloadAction<any[]>) {
			state.popular = action.payload; // Example: Update popular Pokemon
		},
		savePokemon(state, action: PayloadAction<Pokemon>) { // {{change 3}} Add savePokemon reducer
			state.currentPokemon = action.payload;
		},
		// Add other reducers here to handle different actions
	},
});

export const { fetchPokemonSuccess, savePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
