'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ErrorPokemon from '@/app/components/ErrorPokemon';
import PendingPokemon from '@/app/components/PendingPokemon';
import ResultHomePokemon from '@/app/components/HomePagePokemon/ResultHomePokemon';
import type { Pokemon } from '@/types/pokemon';

const getPokemonNumber = () => {
  const number = Math.floor(Math.random() * 151) + 1;
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
};

interface PokemonFromAPI {
  data: Pokemon;
}

const OtherHome = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      const id = getPokemonNumber();
      const response: PokemonFromAPI = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return response.data;
    },
  });

  if (isLoading) return <PendingPokemon />;

  if (error) return <ErrorPokemon />;

  return (
    <div className='App' style={{ margin: 'auto' }}>
      <section className='nesContainer nes-container'>
        {data && <ResultHomePokemon pokemon={data} />}
      </section>
    </div>
  );
};

export default OtherHome;
