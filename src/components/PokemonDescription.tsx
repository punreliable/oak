import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import prettyName from '../utilities/prettyName'

const fetchPokemonBaseHappiness = async (requestURL) => {

	const response = await axios.get(requestURL)
	if (!response.ok) {
		new Error('Happiness could not be found.')
	}
	return response

}

const style = {
	textAlign: 'left'
}

const PokemonDescription = ( pokemonId ) => {

	const [description, setDescription] = useState( null )
	const requestURL = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId.pokemon}`

	useEffect(() => {
		axios.get( requestURL )
		.then( response => {
			setDescription(data.base_happiness)
			})
		.catch( err => { console.log( err ) })
		}, [])

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

  console.log(data.data.description)
  return (
	<div className="nesContainer" style={style}>
		<p className="text-left">Description: {data.data.flavor_text_entries[0].flavor_text}</p>
		<p className="text-left">Base Happiness: {data.data.base_happiness}</p>
		<p className="text-left">Shape: {prettyName(data.data.shape.name)}</p>

	</div>
  )
}

export default PokemonDescription
