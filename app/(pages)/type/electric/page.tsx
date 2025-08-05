'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';
const PokemonTypeElectricPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['type'],
    queryFn: async () => {
      const id: string = 'bug';
      const response = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
      return response.data;
    },
  });
  if (isLoading) return <Pending />;
  if (error) return <Error />;

  return (
    <section className='App container container-type-electric'>
      <div className='row'>
        <h1 className='text-center gameboy title'>Electric Type</h1>
      </div>
      {data && <Result damage_relations={data} />}
    </section>
  );
};

export default PokemonTypeElectricPage;
