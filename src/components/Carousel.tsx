import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Pokemon } from '../../pokemon.d.ts'
import './Carousel.scss'
import professorOak from '../assets/professorOak.svg'

const fetchFirstPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')
  return response.json()

}

const defaultImage = '';

const { data, isLoading, error } = useQuery({
    queryKey: ['pokemon', ], 
    queryFn: fetchFirstPokemon(),
});



const Carousel = () => {

  return(
    <>

      <div className="marquee marquee--8">
        <img className="marquee__item" src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=1" width="100" height="100" alt="" />
        <img className="marquee__item" src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=2" width="100" height="100" alt="" />
        <img className="marquee__item" src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=3" width="100" height="100" alt="" />
        <img className="marquee__item" src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=4" width="100" height="100" alt="" />
        <img className="marquee__item" src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=5" width="100" height="100" alt="" />
        <img className="marquee__item" src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=6" width="100" height="100" alt="" />
        <img className="marquee__item" src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=7" width="100" height="100" alt="" />
        <img className="marquee__item" src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=8" width="100" height="100" alt="" />
      </div>
      
      
      <img src={professorOak} id="imgProfessorOak" alt="Professor Oak" height="64" width="64" />

      {/* 
      <div className="marquee marquee--3">
        <img className="marquee__item" src="https://placehold.co/150x150/purple/gold?font=playfair-display/text=1" width="150" height="150" alt="" />
        <img className="marquee__item" src="https://placehold.co/150x150/purple/gold?font=playfair-display/text=2" width="150" height="150" alt="" />
        <img className="marquee__item" src="https://placehold.co/150x150/purple/gold?font=playfair-display/text=3" width="150" height="150" alt="" />
      </div>

      <div className="marquee marquee--6">
        <img className="marquee__item" src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=1" width="100" height="100" alt="" />
        <img className="marquee__item" src="https://placehold.co/150x100/purple/gold?font=playfair-display/text=2" width="150" height="100" alt="" />
        <img className="marquee__item" src="https://placehold.co/125x100/purple/gold?font=playfair-display/text=3" width="125" height="100" alt="" />
        <img className="marquee__item" src="https://placehold.co/110x100/purple/gold?font=playfair-display/text=4" width="110" height="100" alt="" />
        <img className="marquee__item" src="https://placehold.co/133x100/purple/gold?font=playfair-display/text=5" width="133" height="100" alt="" />
        <img className="marquee__item" src="https://placehold.co/166x100/purple/gold?font=playfair-display/text=6" width="166" height="100" alt="" />
      </div> 
      */}

    </>

  )

}

export default Carousel
