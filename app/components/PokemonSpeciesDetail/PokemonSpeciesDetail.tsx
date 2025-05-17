import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';
import prettyName from '@/utilities/prettyName';

// Example pseudo-code for components/PokemonSpeciesList.tsx
// Example pseudo-code for components/PokemonSpeciesDetail.tsx
const PokemonSpeciesDetail = ({ speciesData }) => {
	// Note: Sprites are typically on the /pokemon endpoint, not /pokemon-species
	// You might need to adjust the URL or perform another fetch here if speciesData.url doesn't have sprite info.
	// Let's assume for this example you need to fetch from the /pokemon endpoint using the name
	const { data, isLoading, error } = useQuery({
	  queryKey: ['pokemon', speciesData.name], // Unique key per pokemon species
	  queryFn: async () => {
		// The species URL might be different from the pokemon URL
		// You might need to construct the pokemon URL or fetch species first to get the pokemon URL
		const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${speciesData.name}`);
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
		  <img src={spriteUrl} alt={prettyName(speciesData.name)} />
		  <p>{prettyName(speciesData.name)}</p>
		</div>
	  );
	}
	return null;
  };

export default PokemonSpeciesDetail;