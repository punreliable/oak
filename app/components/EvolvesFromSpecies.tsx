'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import prettyName from '@/utilities/prettyName';
// import { v4 as uuidv4 } from 'uuid';
import ErrorEvolvesFromSpecies from '@/app/components/EvolvesFromSpecies/ErrorEvolvesFromSpecies';
import PendingEvolvesFromSpecies from '@/app/components/EvolvesFromSpecies/PendingEvolvesFromSpecies';
import ResultEvolvesFromSpecies from '@/app/components/EvolvesFromSpecies/ResultEvolvesFromSpecies';

const EvolvesFromSpecies = (props: { url: string }) => {
  const url = props.url;
  // console.log('ID: ', id);
  const requestURL = url;

  const fetchEvolutionChains = async (requestURL: string) => {
    const response = await axios.get(requestURL);
    if (response.status !== 200) {
      throw new Error('Evolution Chaions could not be found.');
    }
    return response;
  };

  // console.log(requestURL);
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['pokemon-species', requestURL],
    queryFn: () => fetchEvolutionChains(requestURL),
  });

  console.log('Evo Data: ', data);
  console.log('Evolves From: ', data?.data.evolves_from_species);
  console.log('Evolution Chain: ', data?.data.evolution_chain);

  {
    isLoading && <PendingEvolvesFromSpecies />;
  }

  {
    isError && <ErrorEvolvesFromSpecies />;
  }

  {
    data && data?.data.evolves_from_species.url && (
	return(
		<>
			<div className='row'>
			<h1>Evolves From</h1>
			<ResultEvolvesFromSpecies pokemon={data?.data.evolves_from_species.url} />
			</div>
		</>
	));
  }
};

export default EvolvesFromSpecies;
