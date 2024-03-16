import React from 'react'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import prettyName from '../utilities/prettyName'
import { R } from '@tanstack/react-query-devtools/build/legacy/devtools-dKCOqp9Q'

const fetchPokemonBaseHappiness = async (requestURL:string) => {

	const response = await axios.get(requestURL)
	if (response.status !== 200) {
		throw new Error('Happiness could not be found.')
	}
	return response

}

const style: React.CSSProperties = {
	textAlign: 'left'
}



const PokemonDescription = ( pokemonId: number ) => {

	useEffect(() => {
		axios.get( requestURL )
		.then( response => {
			setDescription(response.data.base_happiness) // Access the 'data' property of the 'response' object
			})
		.catch( err => { console.log( err ) })
		}, [])

	const [description, setDescription] = useState( null )
		const requestURL = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId.pokemon}`

		const { data, error, isLoading, isError } = useQuery({
			queryKey:['pokemon-species', requestURL ],
			queryFn: () => fetchPokemonBaseHappiness(requestURL) 
		  })
	
		  if( isLoading ) {
			return <div>Loading...</div>
		  }

		  if( isError ) {
			return <div>Error: {error.message}</div>
		  }

		  return (
			<div style={style}>
				<h2>{prettyName(pokemonId.pokemon)}</h2>
				</div>
		  )
		

}

export default PokemonDescription
