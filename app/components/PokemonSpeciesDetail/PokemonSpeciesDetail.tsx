import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import prettyName from '@/utilities/prettyName';
import Image from 'next/image';

const PokemonSpeciesDetail = ({ speciesData }: any) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['pokemon', speciesData.name], // Unique key per pokemon species
    queryFn: async () => {
      const pokemonResponse = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${speciesData.name}`,
      );
      return pokemonResponse.data; // This data has sprite info
    },
  });

  if (isLoading) return <p>Loading {speciesData.name}...</p>;
  if (error) return <p>Error loading {speciesData.name}</p>;

  if (data) {
    // Assuming data from /pokemon endpoint has sprites
    const spriteUrl = data.sprites.front_default;
    return (
      <div>
        <Image src={spriteUrl} alt={prettyName(speciesData.name)} />
        <p>{prettyName(speciesData.name)}</p>
      </div>
    );
  }
  return null;
};

export default PokemonSpeciesDetail;
