import MainNavigation from './MainNavigation'
import './PagePokemonTypeWater.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import prettyName from '../utilities/prettyName'

const fetchWaterTypeInfo = async (type) => {
	const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
	if (!response.ok) {
		throw new Error('Type could not be found.')
	}
	return response
}

const PagePokemonTypeWater = () => {

	const type = 'water'

	const {data, isLoading, isError, error} = useQuery({
		queryKey: ['type', type],
		queryFn: () => fetchWaterTypeInfo(type)
	})
	
	if (isLoading) {
		return(<div>Loading...</div>)
	}
	
	if (isError) {
		return(<div>Error: {error.message}</div>)
	}

	return(

		<div className="container">
			<MainNavigation />
			<div className="type-icon water"></div>
			<h1>Water Type</h1>

			<p>More details coming soon!</p>
			<p>Pokemon</p>
			<p>Moves</p>
		</div>

	)
}


export default PagePokemonTypeWater
