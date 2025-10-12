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

	const { data, isLoading } = usePLAE(params.locations);
	const locationsData: LocationAreaEncounterFromAPI[] = data?.data;
	console.log('Locations Data Type: ', locationsData.length);
	console.log('Locations Data: ', locationsData);
	const locationList = data?.data.map((location: { location_area: { name: string } }) => {
		return <li key={uuidv4()}>{transformWords(location.location_area.name)}</li>;
	});

	{
		isLoading && <PendingPokeball />;
	}

	return (
		<div className='row' style={{ display: 'inline' }}>
			<h3 className='responsive-h3'>Location Encounters</h3>
			<ul>{locationList}</ul>
		</div>
	);
};

export default PokemonLocationAreaEncounters;
