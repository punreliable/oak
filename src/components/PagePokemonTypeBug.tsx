import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import MainNavigation from './MainNavigation'
import axios from 'axios'
import prettyName from '../utilities/prettyName'
import './PagePokemonTypeBug.scss'
import type { Pokemon } from '../../pokemon.d.ts';

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
		<div className="nesContainer wrapper-bug">

			<MainNavigation />

			<div className="type-icon typeIcon bug"></div>

			<h1 className="text-bug dark">Bug Type</h1>
			
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
			<h2>Moves</h2>

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
