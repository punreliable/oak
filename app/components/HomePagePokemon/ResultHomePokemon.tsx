import React from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PendingPokemon from '@/app/components/PendingPokemon';
import ErrorPokemon from '@/app/components/ErrorPokemon';
import PokemonAbilitiesList from '@/app/components/PokemonAbilitiesList';
import PokemonBaseStatsList from '@/app/components/PokemonBaseStatsList';
import PokemonDescription from '@/app/components/PokemonDescription';
import PokemonStats from '@/app/components/PokemonStats';
import PokemonTypeList from '@/app/components/PokemonTypeList';
import MovesByPokemon from '@/app/components/MovesByPokemon';
import transformWords from '@/utilities/transformWords';
import Message from '@/app/components/ProfessorOak/Message';
import EvolutionsHandler from '@/app/components/EvolutionsByPokemon/EvolutionsHandler';
import type { Pokemon } from '@/types/pokemon';
import type { PokemonSpecies } from '@/types/pokemon-species';
import type {PokemonBaseStat, PokemonBaseStats} from '@/types/pokemon-base-stats';
interface PokemonFromAPI {
	pokemon: Pokemon;
}

interface PokemonSpeciesFromAPI {
	data: PokemonSpecies;
	status: number;
}

const ResultHomePokemon = (props: PokemonFromAPI) => {
	async function fetchSpeciesData(requestURL: string) {
		const response: PokemonSpeciesFromAPI = await axios.get(requestURL);
		if (response.status !== 200) {
			throw new Error('Evolves from Species, could not be found.');
		}
		return response;
	}

	const { data, isLoading, isError } = useQuery({
		queryKey: ['species'],
		queryFn: () =>
			fetchSpeciesData(`https://pokeapi.co/api/v2/pokemon-species/${props.pokemon.name}`),
	});

	console.log('baseStats: ', props?.pokemon.stats);

	const baseStats: { base_stat: number; effort: number; stat: { name: string; url: string; }; }[]  = props?.pokemon.stats;

	{
		isLoading && <PendingPokemon />;
	}

	{
		isError && <ErrorPokemon />;
	}

	return (
		<section className='container'>
			<h1 className='oakHello'>Hello,</h1>

			<h1 className='pokemonName'>{transformWords(props?.pokemon.name)}</h1>

			<Image
				className='nes-avatar avatar pokemonAvatar'
				alt={'Image of a ' + transformWords(props?.pokemon.name)}
				id='avatar'
				src={props?.pokemon.sprites?.front_default}
				width={256}
				height={256}
			/>

			<div className='row'>
				<div className='col-lg-4' style={{ order: '1' }}>
					{baseStats && <PokemonBaseStatsList stats={baseStats} />}

					{data && <PokemonStats data={props.pokemon} stats={data.data} />}
				</div>
				<div className='col-lg-8' style={{ order: '2' }}>
					{data && <PokemonDescription data={data.data} />}
				</div>
			</div>

			<div className='row my-4'>
				<EvolutionsHandler id={props.pokemon.id} />
			</div>

			{props.pokemon.types && <PokemonTypeList types={props.pokemon.types} />}

			{props.pokemon.abilities && (
				<PokemonAbilitiesList abilities={props.pokemon.abilities} />
			)}

			{props.pokemon.id && props.pokemon.moves && (
				<MovesByPokemon moves={props.pokemon.moves} from={props.pokemon.id.toString()} />
			)}

			{props.pokemon.id && (
				<div className='row'>
					<Message pokemon={props.pokemon.id.toString()} />
				</div>
			)}
		</section>
	);
};

export default ResultHomePokemon;
