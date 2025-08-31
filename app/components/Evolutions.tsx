'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ErrorEvolutions from './EvolutionsPerPokemon/ErrorEvolutions';
import PendingEvolutions from './EvolutionsPerPokemon/PendingEvolutions';
import type { PokemonSpecies } from '@/types/pokemon-species';

interface PokemonSpeciesAPIResponse {
  data: PokemonSpecies;
  status: number;
}

const Evolutions = (props: { id: number }) => {
  const id = props.id.toString();
  const requestURL: string = 'https://pokeapi.co/api/v2/pokemon-species/' + id + '/';

  const fetchEvolutionChains = async (requestURL: string) => {
    const response: PokemonSpeciesAPIResponse = await axios.get(requestURL);
    if (response.status !== 200) {
      throw new Error('Evolution Chains could not be found.');
    }
    return response;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['evolution', requestURL],
    queryFn: () => fetchEvolutionChains(requestURL),
  });

  const evolvesFromSpecies = data?.data.evolves_from_species
    ? data.data.evolves_from_species.url
    : null;

  {
    isLoading && <PendingEvolutions />;
  }

  {
    isError && <ErrorEvolutions />;
  }

  {
    data && evolvesFromSpecies ? (
      <>
        <div className='row'>
          <h1>Evolves From</h1>
        </div>
        <div className='row'>
          <p>A Pokemon</p>
        </div>
      </>
    ) : (
      data && (
        <>
          <div className='row'>
            <h2>Does not evolve from another pokemon</h2>
          </div>
        </>
      )
    );
  }
};

export default Evolutions;
