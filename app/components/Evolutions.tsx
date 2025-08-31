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
import type { PokemonSpecies } from '@/types/pokemon-species';

interface PokemonSpeciesAPIResponse {
  data: PokemonSpecies;
  status: number;
}

const Evolutions = (props: number) => {

  const id = props;
  const requestURL = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

  const fetchEvolutionChains = async (requestURL: string) => {
    const response: PokemonSpeciesAPIResponse = await axios.get(requestURL);
    if (response.status !== 200) {
      throw new Error('Evolution Chaions could not be found.');
    }
    return response;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokemon-species', requestURL],
    queryFn: () => fetchEvolutionChains(requestURL),
  });

  // console.log('Evo Data: ', data);

  const evolvesFromSpecies = data?.data.evolves_from_species
    ? data.data.evolves_from_species.url
    : null;
  const evolutionChain = data?.data.evolution_chain ? data.data.evolution_chain : null;

  //   console.log('Evolves From: ', evolvesFromSpecies);
  //   console.log('Evolution Chain: ', evolutionChain);

  {
    isLoading && <PendingEvolutions />;
  }

  {
    isError && <ErrorEvolutions />;
  }

  {
    data && evolvesFromSpecies && (
      <>
        <div className='row'>
          <h1>Evolves From</h1>
        </div>
        <div className='row'>
          <EvolvesFromSpecies species={evolvesFromSpecies} />
        </div>
      </>
    );
  }
  {
    data && !evolvesFromSpecies && (
      <>
        <div className='row'>
          <h2>Does not evovle from another pokemon</h2>
        </div>
      </>
    );
  }
};

export default Evolutions;
