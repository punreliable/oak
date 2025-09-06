'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DamageRelationsError from '@/app/components/DamageRelations/DamageRelationsError';
import DamageRelationsPending from '@/app/components/DamageRelations/DamageRelationsPending';
import DamageRelationsResult from '@/app/components/DamageRelations/DamageRelationsResult';
import prettyName from '@/utilities/prettyName';
const PokemonTypeBugPage = () => {
	const typeID: string = 'bug';
	const { data, error, isLoading } = useQuery({
		queryKey: ['type'],
		queryFn: async () => {
			const id: string = typeID;
			const response = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
			return response.data;
		},
	});

	if (isLoading) return <DamageRelationsPending />;

	if (error) return <DamageRelationsError />;

	return (
		<section className={`App container container-type-${typeID}`}>
			<div className='row'>
				<h1 className='responsive-h1 text-center gameboy mb-4'>
					{prettyName(typeID)} Type
				</h1>
			</div>
			{data && <DamageRelationsResult damage_relations={data} />}
		</section>
	);
};

export default PokemonTypeBugPage;
