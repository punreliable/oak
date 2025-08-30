'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import prettyName from '@/utilities/prettyName';
// import { v4 as uuidv4 } from 'uuid';
import ErrorEvolvesFromSpecies from '@/app/components/EvolvesFromSpecies/ErrorEvolvesFromSpecies';
import PendingEvolvesFromSpecies from '@/app/components/EvolvesFromSpecies/PendingEvolvesFromSpecies';
import ResultEvolvesFromSpecies from '@/app/components/EvolvesFromSpecies/ResultEvolvesFromSpecies';
import type { PokemonSpecies } from '@/types/pokemon-species';

const EvolvesFromSpecies = (props: { url: string }) => {
  const url = props.url;

  const fetchEvolutionChains = async (requestURL: string) => {
    const response: PokemonSpecies = await axios.get(requestURL);
    if (response?.status !== 200) {
      throw new Error('Evolution Chaions could not be found.');
    }
    return response;
  };

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['pokemon-species', url],
    queryFn: () => fetchEvolutionChains(url),
  });

  {
    isLoading && <PendingEvolvesFromSpecies />;
  }

  {
    isError && <ErrorEvolvesFromSpecies />;
  }

  {
    data && data.data.evolves_from_species.url && (
      <>
        <div className='row'>
          <h1>Evolves From</h1>
          <ResultEvolvesFromSpecies pokemon={data.evolves_from_species.url} />
        </div>
      </>
    );
  }
};

export default EvolvesFromSpecies;
