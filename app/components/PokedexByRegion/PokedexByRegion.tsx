import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';

const PokedexByRegion = (props: any) => {

	const id = props.regionId;
	console.log('Region ID: ', id);
	const { data, error, isLoading } = useQuery({
    queryKey: ['regional-pokedex'],
    queryFn: async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/region/${id}`);
      return response.data;
    },
  });

  if (isLoading) return <Pending />;

  if (error) return <Error />;

  if(data){

  return (
    <div className='App'>
      <section className='nesContainer nes-container'>{data && <Result pokedex={data} />}</section>
    </div>
  );
}
};

export default PokedexByRegion;
