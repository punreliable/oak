'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import EvolutionChainHandler from '@/app/components/EvolutionsByPokemon/EvolutionChainHandler';
import type { PokemonSpecies } from '@/types/pokemon-species';
import ErrorPokemon from '@/app/components/ErrorPokemon';
import PendingPokemon from '@/app/components/PendingPokemon';

interface PokemonSpeciesAPIResponse {
  data: PokemonSpecies;
  status: number;
}

const EvolutionsHandler = (props: { id: number }) => {
  const pokemonID = props.id.toString();
  const requestURL = `https://pokeapi.co/api/v2/pokemon-species/${pokemonID}`;

  async function fetchPokemonSpeciesData(requestURL: string) {
    const response: PokemonSpeciesAPIResponse = await axios.get(requestURL);
    if (response.status !== 200) {
      throw new Error('Evolves from Species, could not be found.');
    }
    return response;
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['evolution-handler', requestURL],
    queryFn: () => fetchPokemonSpeciesData(requestURL),
  });

  if (isLoading) <PendingPokemon />;
  if (isError) <ErrorPokemon />;

  const showEvolutionChain = data?.data.evolution_chain?.url
    ? data.data.evolution_chain?.url
    : 'none';

  return (
    <>
      <div className='row' style={{ width: '100%' }}>
        <h3 className='h3-responsive mb-4'>Evolution Chain</h3>
      </div>
      <div className='row' style={{ width: '100%' }}>
        <EvolutionChainHandler url={showEvolutionChain} />
      </div>
    </>
  );
};

export default EvolutionsHandler;
