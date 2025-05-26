import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import RegionPokedex from '../RegionPokedex/RegionPokedex';

const Result = (props: any) => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokedexes'],
    queryFn: async () => {
      const res = await axios.get(`${props.pokedex.pokedexes[0].url}`);
      return res.data;
    },
  });
  
  if (isLoading) return <Pending />;
  if (isError) return <Error />;
  if (data) return (
    <>
      <RegionPokedex pokedexUrl={data.pokemon_entries[0].pokemon_species.url} />
    </>
  );

};

export default Result;
