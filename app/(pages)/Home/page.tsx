'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ErrorHomePokemon from '@/app/components/HomePagePokemon/ErrorHomePokemon';
import PendingHomePokemon from '@/app/components/HomePagePokemon/PendingHomePokemon';
import ResultHomePokemon from '@/app/components/HomePagePokemon/ResultHomePokemon';

const getPokemonNumber = () => {
  const number = Math.floor(Math.random() * 151) + 1;
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
};

const OtherHome = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      const id = getPokemonNumber();
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return response.data;
    },
  });

  if (isLoading) return <PendingHomePokemon />;

  if (error) return <ErrorHomePokemon />;

  return (
    <div className='App' style={{ margin: 'auto' }}>
      <section className='nesContainer nes-container'>
        {data && <ResultHomePokemon pokemon={data} />}
      </section>
    </div>
  );
};

export default OtherHome;
