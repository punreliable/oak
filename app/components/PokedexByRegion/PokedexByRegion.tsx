import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import StarterPokemon from '@/app/components/StarterPokemon/StarterPokemon';

const PokedexByRegion = (props: {key: string; url: string;}) => {

	const url = props.url;
  console.log("Region URL: ", props.url);
	const { data, error, isLoading } = useQuery({
    queryKey: ['pokedex', url],
    queryFn: async () => {
      const response = await axios.get(`${url}`);
      return response.data;
    },
  });

  if (isLoading) return <Pending />;
  
  if (error) return <Error />;

  if(data) {
    return (
      <section className='nesContainer nes-container'>
        <StarterPokemon pokedex={data} />
      </section>
    );
  }
  
}

export default PokedexByRegion;
