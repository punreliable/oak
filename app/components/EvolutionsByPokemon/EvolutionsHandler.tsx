'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { PokemonSpecies } from '@/types/pokemon-species';
import ErrorPokemon from '@/app/components/ErrorPokemon';
import PendingPokemon from '@/app/components/PendingPokemon';

interface PokemonSpeciesAPIResponse {
	data: PokemonSpecies;
	status: number;
}

const EvolutionsHandler = (props: { id: number }) => {
	console.log('Evolutions Handler Begins...');

	const pokemonID = props.id.toString();
	const requestURL = `https://pokeapi.co/api/v2/pokemon-species/${pokemonID}`;

	async function fetchPokemonSpeciesData(requestURL: string) {
		const response: PokemonSpeciesAPIResponse = await axios.get(requestURL);
		if (response.status !== 200) {
			throw new Error('Evolves from Species, could not be found.');
		}
		return response;
	}

	const { isLoading, isError } = useQuery({
		queryKey: ['evolution-handler', requestURL],
		queryFn: async () => await fetchPokemonSpeciesData(requestURL),
	});

	if (isLoading) <PendingPokemon />;
	if (isError) <ErrorPokemon />;

	return (
		<>
			<div className='row' style={{ width: '100%' }}>
				<h3 className='h3-responsive mb-4'>Evolution Chain</h3>
			</div>
		</>
	);
};

export default EvolutionsHandler;
