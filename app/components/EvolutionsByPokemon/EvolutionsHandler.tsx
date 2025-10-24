'use client';
import React from 'react';
import { useQuery, useQueries} from '@tanstack/react-query';
import axios from 'axios';
import EvolutionChainHandler from '@/app/components/EvolutionsByPokemon/EvolutionChainHandler';
import type { PokemonSpecies } from '@/types/pokemon-species';
import type { EvolutionChain } from '@/types/evolution-chain';
import ErrorPokemon from '@/app/components/ErrorPokemon';
import PendingPokemon from '@/app/components/PendingPokemon';

interface PokemonSpeciesAPIResponse {
	data: PokemonSpecies;
	status: number;
};

interface MyEvolutionChain {
	data: EvolutionChain;
	status: number;
};

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

	async function getPokemonEvolutionChain(url: string) {
		const response: PokemonSpeciesAPIResponse = await axios.get(url);
		if (response.status !== 200) {
			throw new Error('Evolution Chain, could not be found.');
		}
		return response;
	}

	const { data, isLoading, isError } = useQuery({
		queryKey: ['evolution-handler', requestURL],
		queryFn: async () => await fetchPokemonSpeciesData(requestURL),
	});

	let evolutionChainURL = '';
	if (data && data.evolution_chain) {
		evolutionChainURL = data?.evolution_chain.url;
	}

	const evolutionData = useQueries({
		queries: data
		  ? data.map((evolutionChainURL: MyEvolutionChain) => {
			  return {
				queryKey: ['evolutionChain', evolutionChainURL],
				queryFn: () => getPokemonEvolutionChain(evolutionChainURL.toString()),
			  }
			})
		  : [], // if userIds is undefined, an empty array will be returned
	  })

	console.log('Evolution Data: ', evolutionData);

	if (isLoading) <PendingPokemon />;
	if (isError) <ErrorPokemon />;

	return (
		<>
			<div className='row' style={{ width: '100%' }}>
				<h3 className='h3-responsive mb-4'>Evolution Chain</h3>
			</div>
			<div className='row' style={{ width: '100%' }}>
				<EvolutionChainHandler url={evolutionData} />
			</div>
		</>
	);
};

export default EvolutionsHandler;
