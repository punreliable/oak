// /Users/brian/Sites/oak/app/(pages)/pokemon/[id]/page.tsx
"use client";
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';
// import {generateStaticParams} from '@/utilities/generateStaticParams';


const getPokemonNumber = () => {
  const number = Math.floor(Math.random() * 151) + 1;
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
};

const OnePokemonPage = () => {

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
    <div className='App'>
      <section className='nesContainer nes-container'>{data && <Result pokemon={data} />}</section>
    </div>
  );
};

export default OnePokemonPage;
