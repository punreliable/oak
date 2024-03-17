import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import type { Pokemon } from '../../pokemon.d.ts'
import MainNavigation from './MainNavigation'
import prettyName from '../utilities/prettyName'

const requestURL: string = `https://pokeapi.co/api/v2/type/bug`

const styleTextAlignLeft: object = {
	textAlign: 'left'
}

const fetchBugTypeInfo = async () => {

	const response = await axios.get(requestURL)
	if (response.status !== 200) {
		throw new Error('Type could not be found.')
	}
	return response

}

const fetchBugTypePokemon = async (requestURL:string) => {

	const response = await axios.get(requestURL)
	if (response.status !== 200) {
		throw new Error('Water type Pokemon could not be found.')
	}
	return response

}

const PagePokemonTypeBug = () => {

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['type'],
		queryFn: async () => {
			const response = await axios.get(requestURL)
			if (response.status !== 200) {
				throw new Error('Bug type Pokemon could not be found.')
			}
			return response
		}
	})
	
	if (isLoading) {
		return(<div>Loading...</div>)
	}
	
	if (isError) {
		return(<div>Error: {error.message}</div>)
	}

	return(
		<div className="nesContainer single-type-page">

			<MainNavigation />

			<div className="type-icon typeIcon bug"></div>

			<h1 className="text-bug dark">Bug Type</h1>
			
			<section id="damage">
				<div>
					<h2 className="text-bug dark">Damage Relations</h2>
					<div className="damageRelations">
						<div className="damageRelations__doubleDamageFrom">
							<h3>Double Damage From</h3>
							<ul>
							{ data?.data.damage_relations.double_damage_from.map((double_damage_from: any, index: number) => {
								return (
									<>
										<li>
											<button type="button" className="nes-btn nesBtn isPrimary is-primary btnPokemon" key={index}>
												{prettyName(double_damage_from.name)}
											</button>
										</li>
									</>
								)
							})
						}
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section id="pokemon">

				<h2 className="text-bug dark">Pokemon</h2>

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

				<h2 className="text-bug dark">Moves</h2>

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

export default PagePokemonTypeBug
