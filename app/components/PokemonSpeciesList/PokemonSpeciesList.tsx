import React from 'react';
import PokemonSpeciesDetail from '@/app/components/PokemonSpeciesDetail/PokemonSpeciesDetail';

// Example pseudo-code for components/PokemonSpeciesList.tsx
const PokemonSpeciesList = ({ pokemonEntries }: any ) => {
	return (
	  <div className="pokemon-grid"> {/* Style this to display tiles */}
		{pokemonEntries.map((entry: any) => (
		  <div key={entry.pokemon_species.name}> {/* Use species name as key */}
			{/* Pass the species data to the final component */}
			<PokemonSpeciesDetail speciesData={entry.pokemon_species} />
		  </div>
		))}
	  </div>
	);
};

export default PokemonSpeciesList;