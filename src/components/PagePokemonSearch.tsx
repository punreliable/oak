import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const PagePokemonSearch = () => {

const [pokemon, setPokemon] = useState(151)

const searchHandler = () => {
  setPokemon(pokemon);
}

  const { isLoading, error, data } = useQuery({
    queryKey: ['pokemon'], 
    queryFn: ( pokemon ) => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.data.results)
  }});

  return(
    <>
    <form onSubmit={searchHandler}>
      <div className="nes-field">
        <label htmlFor="name_field">Your name</label>
        <input type="text" id="name_field" className="nes-input" value={pokemon} />
        <input type="submit" className="nes-btn is-warning" value="Search" />
      </div>
    </form>
    {
      isLoading ? (
        <h1>Searching...</h1>
      )
    }
    {

      isSuccess ? (
        
        data.map((pokemon) => {
          return <h1>{pokemon.name}</h1>
        }

      )
    
    }

    </>
  )
}

export default PagePokemonSearch
