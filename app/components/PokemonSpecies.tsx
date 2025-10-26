// 'use client';
import React from 'react';
import EvolvesFromSpecies from '@/app/components/EvolutionsByPokemon/EvolvesFromSpecies';
import BadgeBasicPokemon from '@/app/components/badges/BadgeBasicPokemon';
import BadgeBabyPokemon from '@/app/components/badges/BadgeBasicPokemon';
import BadgeLegendaryPokemon from '@/app/components/badges/BadgeLegendaryPokemon';
import BadgeMythicalPokemon from '@/app/components/badges/BadgeMythicalPokemon';
import type { PokemonSpecies } from '@/types/pokemon-species';
import transformWords from '@/utilities/transformWords';

interface PokemonDescriptionProps {
	data: PokemonSpecies;
}

const PokemonDescription = (props: PokemonDescriptionProps) => {
	const catchRate: number = props?.data?.capture_rate;
	const color: string = props?.data?.color.name;
	const happiness: number = props?.data?.base_happiness;
	const genderRate: number = props?.data?.gender_rate;
	const growthRate: { name: string; url: string } = props?.data?.growth_rate;
	const hatchCounter: number = props?.data?.hatch_counter;
	const hasEvolutionChain: string = props?.data?.evolution_chain.url
		? props?.data?.evolution_chain.url
		: 'none';

	console.log('This pokemon has an evoution chain: ', hasEvolutionChain);

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

	const isNotBasicPokemon = props.data?.evolves_from_species;
	const isBabyPokemon = props.data?.is_baby;
	const isLegendaryPokemon = props.data?.is_legendary;
	const isMythicalPokemon = props.data?.is_mythical;

	return (
		<>
			{description && (
				<>
					<h4 className='responsive-h4'>Description</h4>
					<p>{description}</p>
					<ul className='nes-list is-disc list-stats'>
						<li>
							<span className='left'>Catch Rate:</span>
							<span className='spacer'>&nbsp;</span>
							<span className='right'>{catchRate}%</span>
						</li>
						<li>
							<span className='left'>Color: </span>
							<span className='spacer'>&nbsp;</span>
							<span className='right'>{transformWords(color)}</span>
						</li>
						<li>
							<span className='left'>Base Happiness: </span>
							<span className='spacer'>&nbsp;</span>
							<span className='right'>{happiness}</span>
						</li>
						<li>
							<span className='left'>Gender Rate: </span>
							<span className='spacer'>&nbsp;</span>
							<span className='right'>{genderRate}</span>
						</li>
						<li>
							<span className='left'>Growth Rate: </span>
							<span className='spacer'>&nbsp;</span>
							<span className='right'>{transformWords(growthRate.name)}</span>
						</li>
						<li>
							<span className='left'>Hatch Counter: </span>
							<span className='spacer'>&nbsp;</span>
							<span className='right'>{hatchCounter}</span>
						</li>
					</ul>
				</>
			)}

			<div className='col-md-12'>
				{isNotBasicPokemon && <EvolvesFromSpecies species={props.data} />}
				{isBabyPokemon && <BadgeBabyPokemon />}
				{isLegendaryPokemon && <BadgeLegendaryPokemon />}
				{isMythicalPokemon && <BadgeMythicalPokemon />}
				{!isNotBasicPokemon && <BadgeBasicPokemon />}
			</div>
		</>
	);
};

export default PokemonDescription;
