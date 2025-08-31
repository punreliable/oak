'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import transformWords from '@/utilities/transformWords';
import PendingPokemon from '@/app/components/PendingPokemon';
import ErrorPokemon from '@/app/components/ErrorPokemon';

const EvolvesFromSpecies = (props: { species: string } | null) => {
  
	const requestURL = props ? props.species : null; 

  async function fetchEvolvesFromSpecies(requestURL: string) {
    const response = await axios.get(requestURL);
    if (response.status !== 200) {
      throw new Error('Evolves from Species, could not be found.');
    }
    return response;
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['evolves-from-species', requestURL],
    queryFn: () => fetchEvolvesFromSpecies(requestURL),
  });

  console.log('I am in the Evolves From Species Component');
  console.log('EvolvesFromSpecies props: ', props.species);
  const species = props.species;

  {
    isLoading && <PendingPokemon />;
  }
  {
    isError && <ErrorPokemon />;
  }
  {
    data && (
<>
		<div className="row">
			<h2 className='h2-responsive'>This Evolves from Another Species.</h2>
		</div>
		<div className="row">
			<p>This Evolves from Another Species.</p>
			<p>{transformWords(species)}</p>
		</div>
</>
    );
  }
};

export default EvolvesFromSpecies;
