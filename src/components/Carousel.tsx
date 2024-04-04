import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Pokemon } from '../../pokemon.js'
import './Carousel.scss'
import professorOak from '../assets/professorOak.svg'
import unsurePokemon from '../assets/0.png'

const fetchFirstPokemon = async () => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
  return response

}

const Carousel = () => {

const defaultImage: string = ''

const { data, isLoading, error, isError } = useQuery({
    queryKey: ['pokemon'], 
    queryFn: () => fetchFirstPokemon,
});





  if(isLoading) {
    return <div>Loading...</div>
  }
  if(isError) {
    return <div>Error: {error?.message}</div>
  }
  
  if(data) {
    console.log(data)
  }

  return(
    <>

      <div className="marquee marquee--8">
        <img className="marquee__item" src={unsurePokemon} width="96" height="96" alt="" />
        <img className="marquee__item" src={unsurePokemon} width="96" height="96" alt="" />
        <img className="marquee__item" src={unsurePokemon} width="96" height="96" alt="" />
        <img className="marquee__item" src={unsurePokemon} width="96" height="96" alt="" />
        <img className="marquee__item" src={unsurePokemon} width="96" height="96" alt="" />
        <img className="marquee__item" src={unsurePokemon} width="96" height="96" alt="" />
        <img className="marquee__item" src={unsurePokemon} width="96" height="96" alt="" />
        <img className="marquee__item" src={unsurePokemon} width="96" height="96" alt="" />
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
