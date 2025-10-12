 "use client";
import {useQuery} from '@tanstack/react-query';
import {queryOptions } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';
import { LocationAreaEncounter } from '@/types/locationAreaEncounter';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { usePLAE } from '@/app/queries/usePLAE';
import transformWords from '@/utilities/transformWords';

const PokemonLocationAreaEncounters = (params: { locations: string }) => {
	type LocationAreaEncounterFromAPI = {
		data: LocationAreaEncounter;
		result: number;
	};

	const {data, isLoading, isError} = usePLAE(params.locations);
	const locationsData: LocationAreaEncounterFromAPI[] = data?.data;
	console.log('Locations Data Type: ', locationsData.length);
	console.log('Locations Data: ', locationsData);
	const locationList = data?.data.map((location: {location_area: {name: string}}) => {
		return <li key={uuidv4()}>{transformWords(location.location_area.name)}</li>
	});
	return (
		<div className='row' style={{ display: 'inline' }}>
			<h3 className='responsive-h3'>Location Encounters</h3>
			<ul>{locationList}</ul>
		</div>
	);
};

export default PokemonLocationAreaEncounters;
