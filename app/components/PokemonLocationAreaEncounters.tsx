'use client';
import {useQuery} from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import transformWords from '@/utilities/transformWords';
import { LocationAreaEncounter } from '@/types/locationAreaEncounter';
import axios from 'axios';

const PokemonLocationAreaEncounters = (locations: string) => {

	type LocationAreaEncounterFromAPI = {
		data: LocationAreaEncounter;
		result: number;
	}

	async function fetchPokemonLocations() {
	
		const response: LocationAreaEncounterFromAPI = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${id}`,
		);

		return response.data;
	}

	const {data, isLoading, isError} = useQuery({
		queryKey: ['locations'],
		queryFn: () => fetchPokemonLocations()
	});

	{data && console.log('Data: ', data)}

	// const locationList = data.map();
	
	return(
		<div className='' style={{ display: 'inline' }} key={uuidv4()}>
			<h3 className='responsive-h3'>Location Encounters</h3>
			{/* {locationList}
			<Link href={`/location/${x.type.name}`} className={`nes-btn is-${x.type.name}`}>
				<span className={`is-${x.type.name}`}>{transformWords(x.type.name)}</span>
			</Link> */}
		</div>
	);
}

export default PokemonLocationAreaEncounters;
