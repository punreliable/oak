'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './(pages)/home/Error';
import Pending from './(pages)/home/Pending';
import Result from './(pages)/home/Result';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const getPokemonNumber = () => {
  const number = Math.floor(Math.random() * 151) + 1;
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
};

const Home = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      const id = getPokemonNumber();
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return response.data;
    },
  });

  if (isLoading) return <Pending />;

  if (error) return <Error />;

  return (
    <div className='App' style={{ margin: 'auto' }}>
      <section className='nesContainer nes-container'>{data && <Result pokemon={data} />}</section>
      <ReactQueryDevtools />
    </div>
  );
};

export default Home;
