import React, { useState, useEffect } from 'react'
import axios from 'axios'
import prettyName from '../../utilities/prettyName'
import PokemonList001to050 from './PokemonList001to050'
import PokemonList051to100 from './PokemonList051to100'
import PokemonList101to151 from './PokemonList101to151'

const PokemonList = () => {

    return (
		<>
			<PokemonList001to050 />
			<PokemonList051to100 />
			<PokemonList101to151 />
		</>
    )
}

export default PokemonList
