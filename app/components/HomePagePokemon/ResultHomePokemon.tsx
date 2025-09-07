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

	const baseStats = props?.pokemon.stats;
	// console.log('baseStats: ', baseStats);
	{
		isLoading && <PendingPokemon />;
	}

	{
		isError && <ErrorPokemon />;
	}

	return (
		<div className='container'>
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

			<div className='row'>
				<h3 className='h3-responsive'>Type</h3>
			</div>

			<div className='row my-4'>
				<PokemonTypeList types={props.pokemon.types} />
			</div>

			<div className='row my-4'>
				<h3 className='h3-responsive gameboy'>Abilities</h3>
			</div>

			<div className='row my-4'>
				<PokemonAbilitiesList abilities={props.pokemon.abilities} />
			</div>

			<div className='row my-4'>
				<h3 className='h3-responsive gameboy'>Moves</h3>
			</div>

			{props.pokemon.id && props.pokemon.moves && (
				<MovesByPokemon moves={props.pokemon.moves} from={props.pokemon.id.toString()} />
			)}

			<div className='row'>
				<Message pokemon={props.pokemon.id.toString()} />
			</div>
		</div>
	);
};

export default ResultHomePokemon;
