'use client';
import React from 'react';
import EvolvesFromSpecies from '@/app/components/EvolutionsByPokemon/EvolvesFromSpecies';
import BadgeBasicPokemon from '@/app/components/badges/BadgeBasicPokemon';
import BadgeBabyPokemon from '@/app/components/badges/BadgeBasicPokemon';
import BadgeLegendaryPokemon from '@/app/components/badges/BadgeLegendaryPokemon';
import BadgeMythicalPokemon from '@/app/components/badges/BadgeMythicalPokemon';
import type { PokemonSpecies } from '@/types/pokemon-species';
import transformWords from '@/utilities/transformWords';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
interface PokemonDescriptionProps {
	data: PokemonSpecies;
}

const PokemonDescription = (props: { id: number }) => {
	const id = props.id;

	const { data, isLoading, isError } = useQuery({
		queryKey: ['species'],
		queryFn: () => {
			const res = axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
			return res;
		},
	});

	const catchRate: number = data?.data.capture_rate;
	const color: string = data?.data.color.name;
	const happiness: number = data?.data.base_happiness;
	const genderRate: number = data?.data.gender_rate;
	const growthRate: { name: string; url: string } = data?.data.growth_rate;
	const hatchCounter: number = data?.data.hatch_counter;
	const hasEvolutionChain: string = data?.data.evolution_chain.url
		? data.data.evolution_chain.url
		: 'none';

	const evolutionChainURL = data?.data.evolution_chain.url;

	const {
		status,
		fetchStatus,
		data: chain,
	} = useQuery({
		queryKey: ['evolution-chain', evolutionChainURL],
		queryFn: () => axios.get(evolutionChainURL),
		enabled: !!evolutionChainURL,
	});

	// console.log('This pokemon has an evoution chain: ', hasEvolutionChain);

	const description = data?.data.flavor_text_entries.map(
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

	// console.log('Data: ', chain?.data);

	const isNotBasicPokemon = data?.data.evolves_from_species;
	const isBabyPokemon = data?.data.is_baby;
	const isLegendaryPokemon = data?.data.is_legendary;
	const isMythicalPokemon = data?.data.is_mythical;
	const evolutionDetails = chain?.data.chain?.evolution_details;
	const speciesName = chain?.data?.species?.name ? chain.data.species.name : 'This Pokemon';
	const evolvesToEvolutionDetails = chain?.data?.chain.evolves_to.evolution_details;

	// const evolvesTo = data?.data.evolves_to;
	// if(data?.data.evolves_to > 0) {
	// 	const evolutionTo = evolvesTo.map( evolve => {
	// 		return <p>{evolve.species.name}</p>;
	// 	});
	// }

	const evolutionTo = chain?.data.chain.evolves_to.map((evolve) => {
		return transformWords(evolve.species.name);
	});

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
				{isNotBasicPokemon && <EvolvesFromSpecies species={data?.data} />}
				{isBabyPokemon && <BadgeBabyPokemon />}
				{isLegendaryPokemon && <BadgeLegendaryPokemon />}
				{isMythicalPokemon && <BadgeMythicalPokemon />}
				{!isNotBasicPokemon && <BadgeBasicPokemon />}
			</div>

			{status == 'success' && chain && (
				<div className='col-md-12'>
					<h3 className='my-4'>Evolution</h3>
					<p>Evolves into: {evolutionTo}</p>
					<p>
						Baby Trigger Item:{' '}
						{data?.data.baby_trigger_item ? data.data.baby_trigger_item : 'None.'}
					</p>
				</div>
			)}
		</>
	);
};

export default PokemonDescription;
