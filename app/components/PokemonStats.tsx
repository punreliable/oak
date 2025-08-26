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

const PokemonStats: React.FC<PokemonStatsProps> = ({ pokemon }) => {
  const requestURL = `https://pokeapi.co/api/v2/pokemon-species/${parseInt(pokemon.id.toString())}/`;

  console.log(requestURL);
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['pokemon-species', requestURL],
    queryFn: () => fetchPokemonSpeciesStats(requestURL),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {pokemon.height && <p>Height: {pokemon.height}in</p>}
      {pokemon.weight && <p>Weight: {pokemon.weight}lb</p>}
      {pokemon.base_experience && <p>Base XP: {pokemon.base_experience}xp</p>}
      {data?.data.base_happiness && <p>Base Happiness: {data.data.base_happiness}</p>}
      {data?.data.capture_rate && <p>Capture Rate: {data.data.capture_rate}</p>}
      {data?.data.color.name && <p>Color: {prettyName(data.data.color.name)}</p>}
      {data?.data.gender_rate && <p>Gender Rate: {data.data.gender_rate}</p>}
      {data?.data.hatch_counter && <p>Hatch Counter: {data.data.hatch_counter}</p>}
      {data?.data.is_baby && <p className='nes-text is-primary'>This is a Baby Pokemon</p>}
      {data?.data.is_legendary && <p className='nes-text is-error'>This is a Legendary Pokemon</p>}
      {data?.data.is_legendary && <p className='nes-text is-warning'>This is a Mythical Pokemon</p>}
    </div>
  );
};

export default PokemonStats;
