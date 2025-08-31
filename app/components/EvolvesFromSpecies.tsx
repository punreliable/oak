'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ErrorEvolvesFromSpecies from '@/app/components/EvolvesFromSpecies/ErrorEvolvesFromSpecies';
import PendingEvolvesFromSpecies from '@/app/components/EvolvesFromSpecies/PendingEvolvesFromSpecies';
// import ResultEvolvesFromSpecies from '@/app/components/EvolvesFromSpecies/ResultEvolvesFromSpecies';
import type { PokemonSpecies } from '@/types/pokemon-species';

interface PokemonSpeciesFromAPI {
  data: PokemonSpecies;
  status: number;
}

const EvolvesFromSpecies = (props: { url: string }) => {
  const url = props.url;

  const fetchEvolutionChains = async (requestURL: string) => {
    const response: PokemonSpeciesFromAPI = await axios.get(requestURL);
    if (response?.status !== 200) {
      throw new Error('Evolution Chaions could not be found.');
    }
    return response;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['evolution-chain', url],
    queryFn: () => fetchEvolutionChains(url),
  });

  const evolvesFromSpecies = data?.data?.evolves_from_species?.url
    ? data.data.evolves_from_species.url
    : null;

  {
    isLoading && <PendingEvolvesFromSpecies />;
  }

  {
    isError && <ErrorEvolvesFromSpecies />;
  }

  {
    data && evolvesFromSpecies && (
      <>
        <div className='row'>
          <h1>Evolves From</h1>
          {/* <ResultEvolvesFromSpecies pokemon={evolvesFromSpecies} /> */}
        </div>
      </>
    );
  }
};

export default EvolvesFromSpecies;
