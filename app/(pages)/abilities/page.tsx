'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './ErrorAbilities';
import Pending from './PendingAbilities';
import Result from './ResultAbilities';

const Abilities = () => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['abilties'],
		queryFn: async () => {
			const response = await axios.get(`https://pokeapi.co/api/v2/ability`);
			return response.data;
		},
	});

	if (isLoading) return <Pending />;

	if (error) return <Error />;

	return (
		<div className='App'>
			<section className='nesContainer nes-container'>
				{data && <Result abilities={data} />}
			</section>
		</div>
	);
};

export default Abilities;
