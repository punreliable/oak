import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import PokemonTile from '../PokemonTile/PokemonTile';

const Result = (props: any) => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokedexes', props.pokedex.pokedexes[0].url],
    queryFn: async () => {
      const res = await axios.get(`${props.pokedex.pokedexes[0].url}`);
      return res.data;
    },
  });
  
  if (isLoading) return <Pending />;
  if (isError) return <Error />;
  if (data) return (
    <>
      <PokemonTile data={data.pokemon_entries[0].pokemon_species.url} />
    </>
  );

};

export default Result;
