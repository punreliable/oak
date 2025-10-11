// "use client";
import { v4 as uuidv4 } from 'uuid';
import { LocationAreaEncounter } from '@/types/locationAreaEncounter';
import axios from 'axios';
import { useEffect, useState } from 'react'; // Import useEffect and useState

const PokemonLocationAreaEncounters = (params: { locations: string }) => {
	type LocationAreaEncounterFromAPI = {
		data: LocationAreaEncounter;
		result: number;
	};

	const [locationData, setLocationData] = useState<LocationAreaEncounterFromAPI | null>(null);

	async function fetchPokemonLocations(url: string): Promise<LocationAreaEncounterFromAPI> {
		try {
			const response: LocationAreaEncounterFromAPI = await axios.get(url.toString());
			console.log('Axios Response:', response.data); // Log the actual data
			return response.data; // Return only the data
		} catch (error) {
			console.error('There was an error fetching the location data', error);
			throw error; // Re-throw the error to be caught by the caller
		}
	}

	useEffect(() => {
		async function getLocationData() {
			console.log('About to get data...');
			try {
				const data = await fetchPokemonLocations(params.locations);
				setLocationData(data);
				// Log the data in a separate useEffect to ensure it's logged after the state update
			} catch (error) {
				console.error('Failed to fetch location data', error);
			}
		}

		getLocationData();
	}, [fetchPokemonLocations, params.locations]);

	// let locationList = locationData.map(location => {
	// 	return location.location_area.name;
	// });

	return (
		<div className='row' style={{ display: 'inline' }} key={uuidv4()}>
			<h3 className='responsive-h3'>Location Encounters</h3>
			{/* {locationList} */}
		</div>
	);
};

export default PokemonLocationAreaEncounters;
