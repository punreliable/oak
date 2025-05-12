import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';

const PokedexByRegion = (props: any) => {

	const id = props.regionId;
	const { data, error, isLoading } = useQuery({
    queryKey: ['regional-pokedex'],
    queryFn: async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/region/${id}`);
      return response.data;
    },
  });

  if (isLoading) return <Pending />;
  
  if (error) return <Error />;
  
  if(data) return (
    <section className='nesContainer nes-container'>
      <Result pokedex={data} />
    </section>
  );
  
}

export default PokedexByRegion;
