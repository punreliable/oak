"use client";
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';

const PokemonPage = (pokemon: {pokemon:string}) => {

  const search: string = pokemon.pokemon;
  console.log('Pokemon: ', pokemon.pokemon);

  const { data, error, isLoading } = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
      return response.data;
    },
  });

  if (isLoading) return <Pending />;

  if (error) return <Error />;

  if (data) return <Result pokemon={data} />

};

export default PokemonPage;
