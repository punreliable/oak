'use client';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ErrorPokemon from '@/app/components/ErrorPokemon';
import PendingPokemon from '@/app/components/PendingPokemon';
import ResultHomePokemon from '@/app/components/HomePagePokemon/ResultHomePokemon';
import type { Pokemon } from '@/types/pokemon';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useDispatch } from 'react-redux';
import { savePokemon } from '@/reducers/pokemonReducer';
import { AppDispatch } from '@/reducers/store';

interface PokemonFromAPI {
	data: Pokemon;
	status: number;
}

const getPokemonNumber = () => {
	const number = Math.floor(Math.random() * 151) + 1;
	if (number < 10) {
		return `0${number}`;
	}
	return `${number}`;
};

const Home = () => {
	const [isClient, setIsClient] = useState(false);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		setIsClient(true);
	}, []);

	const { data, isError, isLoading } = useQuery({
		queryKey: ['pokemon'],
		queryFn: async () => {
			const id = getPokemonNumber();
			const response: PokemonFromAPI = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${id}`,
			);
			return response.data;
		},
		onSuccess: (data: Pokemon) => {
			// {{change 3}} Add onSuccess callback
			console.log('Data being dispatched:', data);
			dispatch(savePokemon(data)); // Dispatch the savePokemon action
		},
	});
	if (!isClient) {
		return null;
	}
	{
		isLoading && <PendingPokemon />;
	}
	{
		isError && <ErrorPokemon />;
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
