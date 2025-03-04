'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ErrorAbility from '../ErrorAbility';
import PendingAbility from '../PendingAbility';
import ResultAbility from '../ResultAbility';

const AbilityName = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['abilty'],
    queryFn: async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/ability`);
      return response.data;
    },
  });

  if (isLoading) return <PendingAbility />;

  if (error) return <ErrorAbility />;

  return (
    <div className='App'>
      <section className='nesContainer nes-container'>
        <h1>Ability</h1>
        {data && <ResultAbility ability={data} />}
      </section>
    </div>
  );
};

export default AbilityName;
 