import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';

// Example pseudo-code for components/PokemonSpeciesList.tsx
const PokemonSpeciesList = ({ pokemonEntries }) => {
	return (
	  <div className="pokemon-grid"> {/* Style this to display tiles */}
		{pokemonEntries.map((entry) => (
		  <div key={entry.pokemon_species.name}> {/* Use species name as key */}
			{/* Pass the species data to the final component */}
			<PokemonSpeciesDetail speciesData={entry.pokemon_species} />
		  </div>
		))}
	  </div>
	);
};

export default PokemonSpeciesList;