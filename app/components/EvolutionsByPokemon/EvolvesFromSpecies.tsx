'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import transformWords from '@/utilities/transformWords';
import PendingPokemon from '@/app/components/PendingPokemon';
import ErrorPokemon from '@/app/components/ErrorPokemon';
import type { PokemonSpecies } from '@/types/pokemon-species';
import Link from 'next/link';
import CardPokemon from '@/app/components/cards/CardPokemon';

interface PokemonSpeciesFromAPI {
  data: PokemonSpecies;
  status: number;
}

const EvolvesFromSpecies = (props: { species: PokemonSpecies }) => {
  const species = props.species;
  const requestURL: string = `https://pokeapi.co/pokemon/${species.name}`;

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
      <h5 className='h5-responsive pt-4'>Evolves from:</h5>
      {/* <CardPokemon name={name} /> */}
      <p>
        <Link href={`/pokemon/${name}`} className='nes-badge'>
          <span className='is-warning' style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
            {transformWords(name)}
          </span>
        </Link>
      </p>
    </div>
  );
};

export default EvolvesFromSpecies;
