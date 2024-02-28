import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchPokemonDetails = async ( pokemonId ) => {
	const response = await fetch(requestURL)
	if( !response.ok ) {
	throw new Error('Network response was not ok')
	}
	return response
}

const fetchPokemonBaseHappiness = async (requestURL) => {

	const response = await axios.get(requestURL)
	if (!response.ok) {
		new Error('Happiness could not be found.')
	}
	return response
}

const PokemonDescription = ( pokemonId ) => {

	const requestURL = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
	const [description, setDescription] = useState( null )
	
	useEffect(() => {
		axios.get( requestURL )
		.then( response => {
			setDescription(data.base_happiness)
			})
		.catch( err => { console.log( err ) })
		}, [])

  const { data, error, isLoading, isError } = useQuery({
	queryKey:['pokemon-species', pokemonId],
	queryFn: () => fetchPokemonBaseHappiness(requestURL) 
  })

  if( isLoading ) {
	return <div>Loading...</div>
  }

  if( isError ) {
	return <div>Error: {error.message}</div>
  }

  return (
	<div className="nesContainer">
		<p>Base Happiness:{data.base_happiness}</p>
	</div>
  )
}

export default PokemonDescription
