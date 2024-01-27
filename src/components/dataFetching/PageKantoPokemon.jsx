import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import axios from 'axios'

const PageKantoPokemon = () => {
	const pokemonId = 37
	const { isLoading, error, data, status, isSuccess, isError } = useQuery({
		queryKey: ['pokemon', {pokemonId}],
		queryFn: () => fetchPokemon(),
		staleTime: 1000 * 5, // 5 seconds
		cacheTime: 1000 * 5,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: true,
		retry: 3,
		retryDelay: 1000,
		refetchInterval: 9000,
	})
	
	// fetch Pokemon
	const fetchPokemon = async () => {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`)
		if(!response.ok) {
			throw new Error('Error using fetch')
		}
	}

	// fetch Uknown
	const fetchUnknown = async () => {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=50&limit=50`)
		if(!response.ok) {
			throw new Error('Error using fetch')
		}
	}

	const pokemons = useQuery({
		queryKey: ['pokemon'],
		queryFn: fetchPokemon
	})

	if(pokemons.isLoading || fetchUnknown.isLoading) {
		return(<h1>
			loading...
		</h1>)
	}
	if( pokemons.error || fetchUnknown.error ) {
		return(<h1>
			{error.message}
		</h1>)
	}

	console.log(pokemons?.data?.data)




	return(
		<div className="container">
		<h1>Kanto Pokemon</h1>

		{users.data?.map((pokemons) => {
			return(
				<div className="nes-container with-title is-centered" key={pokemons.id}>
					<p className="title">Name: {pokemons.name}</p>
					<div className="nes-container is-rounded">
						<img src={pokemons.sprites.front_default} alt={pokemons.name} />
					</div>
				</div>
			)
		})}

		<ContainerButtons>
			<button type="button" className="nes-btn is-primary">Previous</button>
			<span>&nbsp;</span>
			<button type="button" className="nes-btn is-primary">Next</button>
		</ContainerButtons>

		</div>
	)
}

export default PageKantoPokemon

const ContainerButtons = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	align-content: flex-start;
	justify-content: space-between;
	width: 100%;
	min-width: 420px;
`