'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { EvolutionChainFromAPI } from '@/types/evolution-chain';
import PendingPokemon from '@/app/components/PendingPokemon';
import ErrorPokemon from '@/app/components/ErrorPokemon';
import transformWords from '@/utilities/transformWords';

const EvolutionChainHandler = (props: { url: string }) => {
  const chainURL: string = props.url;

  const fetchEvolutionChain = async (requestURL: string) => {
    const response: EvolutionChainFromAPI = await axios.get(requestURL);
    if (response.status !== 200) {
      throw new Error('Evolution Chain could not be found.');
    }
    return response;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['evolution-chain', chainURL],
    queryFn: () => fetchEvolutionChain(chainURL),
  });

  {
    isLoading && <PendingPokemon />;
  }
  {
    isError && <ErrorPokemon />;
  }

  const evolvesTo = data?.data.chain.evolves_to.map((evolves_to) => {
    return <span key={evolves_to.species.name}>{transformWords(evolves_to.species.name)}</span>;
  });

  return (
    <>
      <p>
        {data && transformWords(data.data.chain.species.name) + ' evolves into '}
        {data && evolvesTo}
      </p>
    </>
  );
};

export default EvolutionChainHandler;
