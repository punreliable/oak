'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';
const PokemonTypeBugPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['type'],
    queryFn: async () => {
      const id: string = 'ghost';
      const response = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
      return response.data;
    },
  });
  if (isLoading) return <Pending />;
  if (error) return <Error />;

  return (
    <section className='App container container-type-ghost'>
      <div className='row'>
        <h1 className='responsive-h1 text-center gameboy title'>Ghost Type</h1>
      </div>
      {data && <Result damage_relations={data} />}
    </section>
  );
};

export default PokemonTypeBugPage;
