import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
  popular: any[];
  new: any[];
  latest: any[];
  searched: any[];
}

const initialState: PokemonState = {
  popular: [],
  new: [],
  latest: [],
  searched: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    fetchPokemonSuccess(state, action: PayloadAction<any[]>) {
      state.popular = action.payload; // Example: Update popular Pokemon
    },
    // Add other reducers here to handle different actions
  },
});

export const { fetchPokemonSuccess } = pokemonSlice.actions;

export default pokemonSlice.reducer;