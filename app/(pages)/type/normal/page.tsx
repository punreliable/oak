'use client';
import React from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PendingType from '../Pending';
import typeIcon from '@/assets/type-icons-color-dark/01-normal.svg';
import './NormalTypeStyles.scss';

const PokemonTypeNormalPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['normal'],
    queryFn: async () => {
      const id = 1;
      const response = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
      return response.data;
    },
  });

  if (isLoading) return <PendingType />;

  if (error)
    return (
      <>
        <h1>There has been an error trying to retreive data on this Pokemon Type.</h1>
        <p>Please try again!</p>
      </>
    );
  if (data) console.log('Normal Type Pokemon Data: ', data);
  if (data) console.log('Normal Type Pokemon Abilities: ', data.abilities);

  if (data)
    return (
      <div className='App nes-container'>
        <section className='nesContainer'>
          <section>
            <h1>Normal Type</h1>
            <Image
              src={typeIcon}
              alt={'Normal Type Logo'}
              height={64}
              width={64}
              className='typeIcon'
            />
          </section>
          <section>
            <h2>Abilities</h2>
            <p>Coming Soon.</p>
          </section>
          <section>
            <h2>Moves</h2>
            <p>Coming Soon.</p>
          </section>
          <section>
            <h2>Pokemon</h2>
            <p>Coming Soon.</p>
          </section>
        </section>
      </div>
    );
};

export default PokemonTypeNormalPage;
