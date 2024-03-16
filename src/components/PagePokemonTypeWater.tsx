import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import prettyName from '../utilities/prettyName'
import MainNavigation from './MainNavigation'
import './PagePokemonTypeWater.scss'

const requestURL = `https://pokeapi.co/api/v2/type/water`

// const style = {
// 	textAlign: 'left'
// }

const fetchWaterTypeInfo = async () => {

		const response = await axios.get(requestURL)
		if (!response.ok) {
			throw new Error('Type could not be found.')
		}

	return response
	
}

const fetchWaterTypePokemon = async (requestURL) => {

	const response = await axios.get(requestURL)
	if (!response.ok) {
		new Error('Water type Pokemon could not be found.')
	}
	return response

}


const PagePokemonTypeWater = () => {

		//const type = 'water'
		//const [description, setDescription] = useState( null )
		//const requestURL = `https://pokeapi.co/api/v2/type`

		// axios.get(requestURL)
		// 	.then(response => {
		// 		console.log(response.data)
		// 	})
		// 	.catch(error => {
		// 		console.error('Error fetching data: ', error)
		// 	});

		// useEffect(() => {
		// 			axios.get( requestURL )
		// 	.then( response => {
		// 		setDescription(response)
		// 		})
		// 	.catch( err => { console.log( err ) })
		// 	}, [])


	
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['type'],
		queryFn: async () => {
			const response = await axios.get(requestURL)
			if (!response.ok) {
				new Error('Water type Pokemon could not be found.')
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

		<div className="nesContainer">

			<MainNavigation />

			<div className="type-icon typeIcon water"></div>

			<h1>Water Type</h1>
			<h2>Pokemon</h2>

			{
				data.data.pokemon.map((pokemon, index) => {
					return(
						<button type="button" className="nes-btn nesBtn isPrimary is-primary btnPokemon" key={index}>
							{prettyName(pokemon.pokemon.name)}
							</button>
					)
				})
			
			
			}

			<h2>Moves</h2>

		</div>
  	)

	
}
export default PagePokemonTypeWater
