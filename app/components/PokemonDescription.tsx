'use client';
import React from 'react';
import EvolvesFromSpecies from '@/app/components/EvolutionsByPokemon/EvolvesFromSpecies';
import BasicPokemon from '@/app/components/EvolutionsByPokemon/BasicPokemon';
import type { PokemonSpecies } from '@/types/pokemon-species';

interface PokemonDescriptionProps {
	data: PokemonSpecies;
}

const PokemonDescription = (props: PokemonDescriptionProps) => {
	const description = props?.data?.flavor_text_entries.map(
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
	const isBasicPokemon = props.data?.evolves_from_species;

	return (
		<>
			{description && (
				<>
					<h4 className='responsive-h4'>Description:</h4>
					<p>{description}</p>
				</>
			)}

			<div className='col-md-12'>
				{isBasicPokemon && <EvolvesFromSpecies species={props.data} />}
				{!isBasicPokemon && <BasicPokemon />}
			</div>
		</>
	);
};

export default PokemonDescription;
