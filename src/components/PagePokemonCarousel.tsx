import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import type { Pokemon } from '../../pokemon.js'
import type { PokemonType } from '../../pokemon-type.js'
import MainNavigation from './MainNavigation.js'
import Carousel from './Carousel'
import './PagePokemonCarousel.scss'

const PagePokemonCarousel = () => {

	return(
		<div className="nesContainer kantoCarousel">
			<MainNavigation />
			<h1 className="text-electric dark">Welcome to the World of Pokemon</h1>
			<section id="carousel">
				<Carousel />	
			</section>
		</div>
	)

}

export default PagePokemonCarousel
