'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import EvolvesFromSpecies from '@/app/components/EvolutionsByPokemon/EvolvesFromSpecies';
import BasicPokemon from '@/app/components/EvolutionsByPokemon/BasicPokemon';

interface PokemonDescriptionProps {
  pokemon: number;
}

const fetchPokemonBaseHappiness = async (requestURL: string) => {
  const response = await axios.get(requestURL);
  if (response.status !== 200) {
    throw new Error('Happiness could not be found.');
  }
  return response;
};

const style: React.CSSProperties = {
  textAlign: 'left',
};

const PokemonDescription: React.FC<PokemonDescriptionProps> = ({ pokemon }) => {
  const requestURL = `https://pokeapi.co/api/v2/pokemon-species/${parseInt(pokemon.toString())}/`;

  // console.log(requestURL);
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['pokemon-species', requestURL],
    queryFn: () => fetchPokemonBaseHappiness(requestURL),
  });

  const description = data?.data.flavor_text_entries.map(
    (flavor: {
      flavor_text: string;
      language: { name: string; url: string };
      version: { name: string; url: string };
    }) => {
      if (flavor.language.name == 'en' && flavor.version.name === 'yellow') {
        return flavor.flavor_text;
      }
    },
  );

  const isBasicPokemon = data?.data.evolves_from_species;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='col-md-12' style={style}>
      <h4 className='responsive-h4'>Description:</h4>
      <p>{description}</p>
      {isBasicPokemon && <EvolvesFromSpecies species={isBasicPokemon.url} />}
      {!isBasicPokemon && <BasicPokemon />}
    </div>
  );
};

export default PokemonDescription;
