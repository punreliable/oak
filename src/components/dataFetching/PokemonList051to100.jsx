import React, { useState, useEffect } from 'react'
import axios from 'axios'
import prettyName from '../../utilities/prettyName'

const PokemonList051to100 = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=50')
            .then(response => {
                setPokemonList(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
		<div class="lists">
  			<ul class="nes-list is-disc">
            	{pokemonList.map((pokemon, index) => (
                	<li key={index}>{prettyName(pokemon.name)}</li>
            	))}
        	</ul>
		</div>
    )
}

export default PokemonList051to100
