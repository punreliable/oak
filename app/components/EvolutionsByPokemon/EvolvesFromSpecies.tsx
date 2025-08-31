'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import transformWords from '@/utilities/transformWords';

const EvolvesFromSpecies = (props: { species: string }) => {

	const requestURL = props.species;

	async function fetchEvolvesFromSpecies(url: string) {
		const response = await axios.get(url);
		if (response.status !== 200) {
			throw new Error('Evolves from Species, could not be found.');
		}
		return response;
	};

	const { data, isLoading, isError } = useQuery({
		queryKey: ['evolves-from-species', requestURL],
		queryFn: () => fetchEvolvesFromSpecies(requestURL),
	});

	console.log('I am in the Evolves From Species Component');
	console.log('EvolvesFromSpecies props: ', props.species);
	const species = props.species;

	{data && 

			<>
				<h2 className='h2-responsive'>This Evolves from Another Species.</h2>
				<p>This Evolves from Another Species.</p>
				<p>{transformWords(species)}</p>
			</>

	}
};

export default EvolvesFromSpecies;
