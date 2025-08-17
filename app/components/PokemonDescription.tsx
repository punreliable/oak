import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

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

  console.log(requestURL);
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['pokemon-species', requestURL],
    queryFn: () => fetchPokemonBaseHappiness(requestURL),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="col-md-12" style={style}>
      {data && (
        <>
          <p>Description: {data.data.flavor_text_entries[0].flavor_text}</p>
          <p>Base Happiness: {data.data.base_happiness}</p>
        </>
      )}
    </div>
  );
};

export default PokemonDescription;
