import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import type { Pokemon } from '../../pokemon.d.ts'
import type { PokemonType } from '../../pokemon-type.d.ts'
import DoubleDamageFrom from './DoubleDamageFrom'
import DoubleDamageTo from './DoubleDamageTo'
import HalfDamageFrom from './HalfDamageFrom'
import HalfDamageTo from './HalfDamageTo'
import NoDamamgeFrom from './NoDamageFrom'
import NoDamamgeTo from './NoDamageTo'
import MainNavigation from './MainNavigation'
import prettyName from '../utilities/prettyName'

import './PagePokemonTypeElectric.scss'

const requestURL: string = `https://pokeapi.co/api/v2/type/electric`

const styleTextAlignLeft: object = {
	textAlign: 'left'
}

const fetchElectricTypeInfo = async () => {

	const response = await axios.get(requestURL)
	if (response.status !== 200) {
		throw new Error('Type could not be found.')
	}
	return response

}

const fetchElectricTypePokemon = async (requestURL:string) => {

	const response = await axios.get(requestURL)
	if (response.status !== 200) {
		throw new Error('Electric type Pokemon could not be found.')
	}
	return response

}

const PagePokemonTypeElectric = () => {

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['type'],
		queryFn: async () => {
			const response = await axios.get(requestURL)
			if (response.status !== 200) {
				throw new Error('Electric type Pokemon could not be found.')
			}
			return response
		}
	})

	// const [doubleDMFrom, setDoubleDMFrom] = useState<PokemonType|null> (null);	
	// const [doubleDMTo, setDoubleDMTo] = useState<PokemonType|null> (null);
	// const [halfDMFrom, setHalfDMFrom] = useState<PokemonType|null> (null);	
	// const [halfDMTo, setHalfDMTo] = useState<PokemonType|null> (null);
	// const [noDMFrom, setNoDMFrom] = useState<PokemonType|null> (null);	
	// const [noDMTo, setNoDMTo] = useState<PokemonType|null> (null);
	
	if (isLoading) {
		return(<div>Loading...</div>)
	}
	
	if (isError) {
		return(<div>Error: {error.message}</div>)
	}


	return(
		<div className="nesContainer single-type-page">

			<MainNavigation />

			<div className="type-icon typeIcon electric"></div>

			<h1 className="text-electric dark">Electric Type</h1>
			
			<section id="damage">
				
				<div>
					
					<h2 className="text-electric dark">Damage Relations</h2>
					
					<div className="damageRelations">

						{
						//	data?.damage_relations.double_damage_from && (
						//		<DoubleDamageFrom data={data.damage_relations.double_damage_from} />
						//	)
						}

						{
							/*
						data?.data.damage_relations.double_damage_to.length > 0 && ((
							<DoubleDamageTo data={data?.data.damage_relations.double_damage_to} />
						))
						*/
						}

						{ 
						/*
						data?.data.damage_relations.half_damage_from.length > 0 && ((
							<HalfDamageFrom data={data?.data.damage_relations.half_damage_from} />
						))
						*/ 
						}

						{ 
						/* data?.data.damage_relations.half_damage_to.length > 0 && ((
							<HalfDamageTo data={data?.data.damage_relations.half_damage_to} />
						)) */ 
						}

						{ 
						// data?.data.damage_relations.no_damage_from.length > 0 && ((
						// 	<NoDamamgeFrom data={data?.data.damage_relations.no_damage_from} />
						// ))
						}

						{ 
						// data?.data.damage_relations.no_damage_to.length > 0 && ((
						// 	<NoDamamgeTo data={data?.data.damage_relations.no_damage_to} />
						// ))
						}

					</div>

				</div>

			</section>

			<section id="pokemon">

				<h2 className="text-electric dark">Pokemon</h2>

				{
					data?.data.pokemon.map((pokemon: any, index: number) => {
						return (
							<button type="button" className="nes-btn nesBtn isPrimary is-primary btnPokemon" key={index}>
								{prettyName(pokemon.pokemon.name)}
							</button>
						)
					})
				}
		
			</section>

			<section id="moves">

				<h2 className="text-electric dark">Moves</h2>

				{
					data?.data.moves.map((move: any, index: number) => {
						return (
							<button type="button" className="nes-btn nesBtn iserror btnPokemon" key={index}>
								{prettyName(move.name)}
							</button>
						)
					})
				}

			</section>
		
		</div>
	)

}

export default PagePokemonTypeElectric









 



