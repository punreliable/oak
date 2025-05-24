import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';
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



  // const allPokemonEntries = data.pokemon_entries;
  // const firstNinePokemonEntries = allPokemonEntries && allPokemonEntries.length > 0
  // ? allPokemonEntries.slice(0, 9)
  // : [];
  // console.log("First 9: ", firstNinePokemonEntries)

  if (isLoading) return <Pending />;
  
  if (error) return <Error />;

  if(data) {
    return (
      <section className='nesContainer nes-container'>
        {/* <Result pokemonEntries={firstNinePokemonEntries} />*/}
        <StarterPokemon pokedex={data} />
      </section>
    );
  }
  
}

export default PokedexByRegion;
