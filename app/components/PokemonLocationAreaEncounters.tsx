'use client';
import { v4 as uuidv4 } from 'uuid';
import { LocationAreaEncounter } from '@/types/locationAreaEncounter';
import { usePLAE } from '@/app/queries/usePLAE';
import transformWords from '@/utilities/transformWords';
import PendingPokeball from '@/app/components/PendingPokeball';

const PokemonLocationAreaEncounters = (params: { locations: string }) => {
	type LocationAreaEncounterFromAPI = {
		data: LocationAreaEncounter;
		result: number;
	};

	type LocationAreaEncounterResponse = {
		location_area: { name: string };
		version_details: { encounter_details: { version: { name: string } } };
	};

	const { data, isLoading } = usePLAE(params.locations);
	const locationsData: LocationAreaEncounterFromAPI[] = data?.data;
	console.log('Data: ', locationsData);
	const locationList = data?.data.map((location: LocationAreaEncounterResponse) => {
		return <li key={uuidv4()}>{transformWords(location.location_area.name)}</li>;
	});

	{
		isLoading && <PendingPokeball />;
	}

	return (
		<div className='row' style={{ display: 'inline' }}>
			<h3 className='responsive-h3'>Location Encounters</h3>
			<div className='lists'>
				<ul className='nes-list is-circle'>{locationList}</ul>
			</div>
		</div>
	);
};

export default PokemonLocationAreaEncounters;
