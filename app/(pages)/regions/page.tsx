"use client";
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';

const RegionsPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['regions'],
    queryFn: async () => {
      // const id = getBerryNumber();
      const response = await axios.get(`https://pokeapi.co/api/v2/region`);
      return response.data;
    },
  });

  if (isLoading) return <Pending />;

  if (error) return <Error />;

  return (
    <div className='App'>
      <section className='nesContainer nes-container'>{data && <Result regions={data} />}</section>
    </div>
  );
};

export default RegionsPage;
