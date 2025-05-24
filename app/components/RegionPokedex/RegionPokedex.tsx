import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';
import prettyName from '@/utilities/prettyName';

// Example pseudo-code for components/RegionPokedex.tsx
const RegionPokedex = ( pokedexUrl: string ) => {

	console.log('made it to RegionPokedex');
	const { data, isLoading, error } = useQuery({
	  queryKey: ['regional-pokedex'], // Unique key per region
	  queryFn: async () => {
		// Use the URL provided by the regions endpoint
		const response = await axios.get(pokedexUrl);
		return response.data; // This data contains the list of pokemon_entries
	  },
	});
  
	if (isLoading) return <Pending />;
	if (error) return <Error />;
  
	if (data) {
	  // Extract the first 9 pokemon_species entries
	  const firstNinePokemon = data.pokemon_entries.slice(0, 9);
	  return (
		<div>
		  {/* Pass the extracted list to the next component */}
		  <Result pokemonEntries={firstNinePokemon} />
		</div>
	  );
	}
	return null;
  };

  export default RegionPokedex;