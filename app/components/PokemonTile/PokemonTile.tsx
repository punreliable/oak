import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';

const PokemonTile = (props: any) => {
  const url: string = props.data;
  console.log('PokemonTile: ', url);
	const { data, error, isLoading } = useQuery({
    queryKey: ['pokemon-details'],
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
    },
  });

  if (isLoading) return <Pending />;
  if (error) return <Error />;
  if(data) return (
  <>
    <Result pokemon={data} />
  </>
  );
}

export default PokemonTile;
