'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import prettyName from '../../utilities/prettyName';
// import { v4 as uuidv4 } from 'uuid';
import ErrorEvolutions from './EvolutionsPerPokemon/ErrorEvolutions';
import PendingEvolutions from './EvolutionsPerPokemon/PendingEvolutions';
// import ResultEvolutions from './EvolutionsPerPokemon/ResultEvolutions';
import EvolvesFromSpecies from '@/app/components/EvolvesFromSpecies';
// import Pokemon from '@/types/pokemon';

const Evolutions = (props: any) => {
  const id = props.id;

  const requestURL = `https://pokeapi.co/api/v2/pokemon-species/${parseInt(id.toString())}/`;

  const fetchEvolutionChains = async (requestURL: string) => {
    const response = await axios.get(requestURL);
    if (response.status !== 200) {
      throw new Error('Evolution Chaions could not be found.');
    }
    return response;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokemon-species', requestURL],
    queryFn: () => fetchEvolutionChains(requestURL),
  });

  console.log('Evo Data: ', data);
  console.log('Evolves From: ', data?.data.evolves_from_species);
  console.log('Evolution Chain: ', data?.data.evolution_chain);

  {
    isLoading && <PendingEvolutions />;
  }

  {
    isError && <ErrorEvolutions />;
  }

  {
    data && data.data.evolves_from_species.url && (
      <>
        <div className='row'>
          <h1>Evolves From</h1>
        </div>
        <div className='row'>
          <EvolvesFromSpecies evolves={data?.data.evolves_from_species.url} />
        </div>
      </>
    );
  }
};

export default Evolutions;
