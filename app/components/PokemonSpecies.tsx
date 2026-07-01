'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import EvolvesFromSpecies from '@/app/components/EvolutionsByPokemon/EvolvesFromSpecies';
import BadgeBasicPokemon from '@/app/components/badges/BadgeBasicPokemon';
import BadgeBabyPokemon from '@/app/components/badges/BadgeBabyPokemon';
import BadgeLegendaryPokemon from '@/app/components/badges/BadgeLegendaryPokemon';
import BadgeMythicalPokemon from '@/app/components/badges/BadgeMythicalPokemon';
import transformWords from '@/utilities/transformWords';
import PendingPokeball from '@/app/components/PendingPokeball';

const PokemonDescription = ({ id }: { id: number }) => {
	const { data, isLoading } = useQuery({
		queryKey: ['species'],
		queryFn: () => {
			return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
		},
	});

	const catchRate: number = data?.data.capture_rate;
	const color: string = data?.data.color.name;
	const happiness: number = data?.data.base_happiness;
	const genderRate: number = data?.data.gender_rate;
	const growthRate: { name: string; url: string } = data?.data.growth_rate;
	const hatchCounter: number = data?.data.hatch_counter;

	const description = data?.data.flavor_text_entries.find(
		(flavor: {
			flavor_text: string;
			language: { name: string; url: string };
			version: { name: string; url: string };
		}) => flavor.language.name === 'en' && flavor.version.name === 'firered',
	)?.flavor_text;

	const isNotBasicPokemon = data?.data.evolves_from_species;
	const isBabyPokemon = data?.data.is_baby;
	const isLegendaryPokemon = data?.data.is_legendary;
	const isMythicalPokemon = data?.data.is_mythical;

	if (isLoading) return <PendingPokeball />;

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
				{isNotBasicPokemon && (
					<EvolvesFromSpecies species={data?.data.evolves_from_species} />
				)}
			</div>
			<div className='col-md-12'>
				{isBabyPokemon && <BadgeBabyPokemon />}
				{isLegendaryPokemon && <BadgeLegendaryPokemon />}
				{isMythicalPokemon && <BadgeMythicalPokemon />}
				{!isNotBasicPokemon && <BadgeBasicPokemon />}
			</div>
		</>
	);
};

export default PokemonDescription;
