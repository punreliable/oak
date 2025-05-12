import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';

const PokemonTile = (props: any) => {

	const id = props;
	console.log('URL for Tile data: ', props);
	const { data, error, isLoading } = useQuery({
    queryKey: ['pokemon-details'],
    queryFn: async () => {
      const response = await axios.get(`${props}`);
      return response.data;
    },
  });

  if (isLoading) return <Pending />;

  if (error) return <Error />;

  if(data) return (
    <div className='App'>
      <section className='nesContainer nes-container'>{data && <Result pokemon={data} />}</section>
    </div>
  );
}

export default PokemonTile;
