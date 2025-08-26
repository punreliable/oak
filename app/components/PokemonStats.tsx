import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import prettyName from '@/utilities/prettyName';

interface PokemonStatsProps {
  pokemon: any; // Or a more specific type for the pokemon object
}

const fetchPokemonSpeciesStats = async (requestURL: string) => {
  const response = await axios.get(requestURL);
  if (response.status !== 200) {
    throw new Error('Stats could not be found.');
  }
  return response;
};

const style: React.CSSProperties = {
  textAlign: 'left',
};

const PokemonStats: React.FC<PokemonStatsProps> = ({ pokemon }) => {
  const requestURL = `https://pokeapi.co/api/v2/pokemon-species/${parseInt(pokemon.id.toString())}/`;

  console.log(requestURL);
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['pokemon-species', requestURL],
    queryFn: () => fetchPokemonSpeciesStats(requestURL),
  });

  const description = data?.data.flavor_text_entries.map(
    (flavor: {
      flavor_text: string;
      language: { name: string; url: string };
      version: { name: string; url: string };
    }) => {
      if (
        flavor.language.name == 'en' &&
        (flavor.version.name === 'red' || flavor.version.name === 'blue')
      ) {
        return flavor.flavor_text;
      }
    },
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
  <div>
    {pokemon.height && <p className="text-right">Height: {pokemon.height}in</p>}
    {pokemon.weight && <p className="text-right">Weight: {pokemon.weight}lb</p>}
    {pokemon.base_experience && <p className="text-right">Base XP: {pokemon.base_experience}xp</p>}
    {data?.data.base_happiness && <p className="text-right">Base Happiness: {data.data.base_happiness}</p>}
    {data?.data.capture_rate && <p className="text-right">Capture Rate: {data.data.capture_rate}</p>}
    {data?.data.color.name && <p className="text-right">Color: {prettyName(data.data.color.name)}</p>}
  </div>
  );
};

export default PokemonStats;
