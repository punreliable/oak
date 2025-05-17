import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';

const PokedexByRegion = (props: any) => {

	const id = props.data.url;
	const { data, error, isLoading } = useQuery({
    queryKey: ['regional-pokedex', id],
    queryFn: async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/region/${id}`);
      return response.data;
    },
  });

  const allPokemonEntries = data.pokemon_entries;
  const firstNinePokemonEntries = allPokemonEntries && allPokemonEntries.length > 0
  ? allPokemonEntries.slice(0, 9)
  : [];
  console.log("First 9: ", firstNinePokemonEntries)

  if (isLoading) return <Pending />;
  
  if (error) return <Error />;
  
  if(data) {

    return (
      <section className='nesContainer nes-container'>
        <Result pokemonEntries={firstNinePokemonEntries} />
      </section>
    );

  }
  
}

export default PokedexByRegion;
