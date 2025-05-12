import React from 'react';
import prettyName from '../../../utilities/prettyName';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import Error from './Error';
import Pending from './Pending';
import PokemonTile from '../PokemonTile/PokemonTile';

const Result = (props: any) => {

const { data, isLoading, isError } = useQuery({
    queryKey: ['pokedex'],
    queryFn: async () => {
      const rowStart = 24;
      const res = await axios.get(`${props.pokedex.pokedexes[0].url}`);
      return res.data;
    },
  });
  
  if (isLoading) return <Pending />;
  if (isError) return <p>Something went wrong!</p>;
  const pokemon = data?.pokemon_entires;
  let urls = [];
  for (let i = 0; i < 8; i++) {
    urls.push( data.pokemon_entries[i].pokemon_species.url );
  }

  if (data) return <PokemonTile data={urls} />;

};

export default Result;
