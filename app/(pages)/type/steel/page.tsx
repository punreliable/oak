'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from '@/app/(pages)/type/Error';
import Pending from '@/app/(pages)/type/Pending';
import Result from '@/app/(pages)/type/Result';
import prettyName from '@/utilities/prettyName';
const PokemonTypeSteelPage = () => {
	const typeID: string = 'steel';
	const { data, error, isLoading } = useQuery({
		queryKey: ['type'],
		queryFn: async () => {
			const id: string = typeID;
			const response = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
			return response.data;
		},
	});
	if (isLoading) return <Pending />;
	if (error) return <Error />;

	return (
		<section className={`App container container-type-${typeID}`}>
			<div className='row'>
				<h1 className='responsive-h1 text-center gameboy mb-4'>
					{prettyName(typeID)} Type
				</h1>
			</div>
			{data && <Result damage_relations={data} />}
		</section>
	);
};

export default PokemonTypeSteelPage;
