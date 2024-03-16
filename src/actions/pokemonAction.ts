import axios from "axios";

import { kantoPokemonURL } from '../api';

// Action Creator

export const loadPokemon = () => async (dispatch) => {

	// FETCH AXIOS
	const popularData = await axios.get(kantoPokemonURL());
	dispatch( {
		type: "",
		payload: {
			kanto: kantoData.data.results,
		},
	});

};
