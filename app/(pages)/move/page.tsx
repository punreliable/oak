'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './ErrorMove';
import Pending from './PendingMove';
import Result from './ResultMove';

const getMoveId = () => {
  const number = Math.floor(Math.random() * 151) + 1;
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
};

const MovePage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['ability'],
    queryFn: async () => {
      const id = getMoveId();
      const response = await axios.get(`https://pokeapi.co/api/v2/move/${id}`);
      return response.data;
    },
  });

  if (isLoading) return <Pending />;

  if (error) return <Error />;

  return (
    <div className='App'>
      <section className='nesContainer nes-container'>{data && <Result move={data} />}</section>
    </div>
  );
};

export default MovePage;
