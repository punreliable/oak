import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'


const [page, setPage] = useState(1);
const {  data, isError, isLoading } = useQuery('pokemonSpecies', () => fetch(`https://pokeapi.co/api/v2/pokemon-species?limit=20&offset=${page}`).then(res => res.json()));

const PagePokemonSpecies = () => {

return(<>
<h1>Pokemon Species</h1>

</>
)

}




export default PagePokemonSpecies
