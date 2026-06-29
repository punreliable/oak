'use client';

import React, { useEffect, useState } from 'react';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';
import ResultHomePokemon from '@/app/components/HomePagePokemon/ResultHomePokemon';
import type { Pokemon } from '@/types/pokemon';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useDispatch } from 'react-redux';
import { savePokemon } from '@/reducers/pokemonReducer';
import { AppDispatch } from '@/reducers/store';
import { getRandomKantoPokemonByID } from '@/utilities/getRandomKantoPokemonByID';

interface PokemonFromAPI {
	data: Pokemon;
	status: number;
}

const getPokemonNumber = getRandomKantoPokemonByID();

const Home = () => {
	const [isClient, setIsClient] = useState(false);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		setIsClient(true);
	}, []);

	const { data } = useQuery<Pokemon, Error, Pokemon, string[]>({
		queryKey: ['pokemon'],
		queryFn: async () => {
			const id = getPokemonNumber;
			const response: PokemonFromAPI = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${id}`,
			);
			return response.data;
		},
		onSuccess: (pokemonData: Pokemon) => {
			dispatch(savePokemon(pokemonData)); // Dispatch the savePokemon action
		},
	} as UseQueryOptions<Pokemon, Error, Pokemon, string[]>);
	if (!isClient) {
		return null;
	}

	return (
		<div className='App' style={{ margin: 'auto' }}>
			<section className='nesContainer nes-container'>
				{data && <ResultHomePokemon pokemon={data} />}
			</section>
			<ReactQueryDevtools />
		</div>
	);
};

export default Home;
