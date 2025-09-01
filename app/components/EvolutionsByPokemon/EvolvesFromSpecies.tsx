'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import transformWords from '@/utilities/transformWords';
import PendingPokemon from '@/app/components/PendingPokemon';
import ErrorPokemon from '@/app/components/ErrorPokemon';
import type { PokemonSpecies } from '@/types/pokemon-species';

interface PokemonSpeciesFromAPI {
  data: PokemonSpecies;
  status: number;
}

const EvolvesFromSpecies = (props: { species: string }) => {
  const species = props.species;
  const requestURL: string = species;
  console.log('Evolves From Species: ', props.species);

  async function fetchEvolvesFromSpecies(requestURL: string) {
    const response: PokemonSpeciesFromAPI = await axios.get(requestURL);
    if (response.status !== 200) {
      throw new Error('Evolves from Species, could not be found.');
    }
    return response;
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['evolves-from-species', requestURL],
    queryFn: async () => fetchEvolvesFromSpecies(requestURL),
  });

  const name: string = data?.data.name ? data.data.name : 'Unknown';

  {
    isLoading && <PendingPokemon />;
  }

  {
    isError && <ErrorPokemon />;
  }

  return (
    <div className='row'>
      <h4 className='h4-responsive'>This Evolves from Another Species.</h4>
      {name && <p>{transformWords(name)}</p>}
    </div>
  );
};

export default EvolvesFromSpecies;
