

// import { vi, describe, expect, it, beforeEach, afterEach } from 'vitest'
// import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query'

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Pokemon } from '../../pokemon.js'
// import professorOak from '../assets/professorOak.svg'
// import unsurePokemon from '../assets/0.png'
// import { getRandomKantoPokemon } from '../utilities/getRandomKantoPokemon.js'
// import './Carousel.scss'

// const fetchFirstPokemon = async () => {
//   const idOne = getRandomKantoPokemon()
//   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOne}`)
//   return response
// }
// const fetchSecondPokemon = async () => {
//   const idTwo = getRandomKantoPokemon()
//   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idTwo}`)
//   return response
// }
// const fetchThirdPokemon = async () => {
//   const idThree = getRandomKantoPokemon()
//   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idThree}`)
//   return response
// }
// const fetchFourthPokemon = async () => {
//   const idFour = getRandomKantoPokemon()
//   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idFour}`)
//   return response
// }
// const fetchFifthPokemon = async () => {
//   const idFive = getRandomKantoPokemon()
//   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idFive}`)
//   return response
// }
// const fetchSixthPokemon = async () => {
//   const idSix = getRandomKantoPokemon()
//   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idSix}`)
//   return response
// }
// const fetchSeventhPokemon = async () => {
//   const idSeven = getRandomKantoPokemon()
//   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idSeven}`)
//   return response
// }
// const fetchEighthPokemon = async () => {
//   const idEight = getRandomKantoPokemon()
//   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idEight}`)
//   return response
// }

// // const Carousel = () => {
// // const defaultImage: string = unsurePokemon
// // const queryClient = useQueryClient();
// // const { data: firstPokemonData, isLoading: firstPokemonLoading, error: firstPokemonError, isError: firstPokemonIsError } = useQuery({
// //   queryKey: ['firstPokemon'],
// //   queryFn: () => fetchFirstPokemon(),
// // })
// // const { data: secondPokemonData, isLoading: secondPokemonLoading, error: secondPokemonError, isError: secondPokemonIsError } = useQuery({
// //   queryKey: ['secondPokemon'],
// //   queryFn: () => fetchSecondPokemon(),
// // })
// // const { data: thirdPokemonData, isLoading: thirdPokemonLoading, error: thirdPokemonError, isError: thirdPokemonIsError } = useQuery({
// //   queryKey: ['thirdPokemon'],
// //   queryFn: () => fetchThirdPokemon()

// // })
// // const { data: fourthPokemonData, isLoading: fourthPokemonLoading, error: fourthPokemonError, isError: fourthPokemonIsError } = useQuery({
// //   queryKey: ['fourthPokemon'],
// //   queryFn: () => fetchSixthPokemon(),
// // })
// // const { data: fifthPokemonData, isLoading: fifthPokemonLoading, error: fifthPokemonError, isError: fifthPokemonIsError } = useQuery({
// //   queryKey: ['fifthPokemon'],
// //   queryFn: () => fetchFifthPokemon(),
// // })
// // const { data: sixthPokemonData, isLoading: sixthPokemonLoading, error: sixthPokemonError, isError: sixthPokemonIsError } = useQuery({
// //   queryKey: ['sixthPokemon'],
// //   queryFn: () => fetchSixthPokemon()

// // })
// // const { data: seventhPokemonData, isLoading: seventhPokemonLoading, error: seventhPokemonError, isError: seventhPokemonIsError } = useQuery({
// //   queryKey: ['seventhPokemon'],
// //   queryFn: () => fetchSeventhPokemon()

// // })
// // const { data: eighthPokemonData, isLoading: eighthPokemonLoading, error: eighthPokemonError, isError: eighthPokemonIsError } = useQuery({
// //   queryKey: ['eighthPokemon'],
// //   queryFn: () => fetchEighthPokemon()

// // })
// // const [firstPokemon, setFirstPokemon] = useState<string>(defaultImage)
// // const [secondPokemon, setSecondPokemon] = useState<string>(defaultImage)
// // const [thirdPokemon, setThirdPokemon] = useState<string>(defaultImage)
// // const [fourthPokemon, setFourthPokemon] = useState<string>(defaultImage)
// // const [fifthPokemon, setFifthPokemon] = useState<string>(defaultImage)
// // const [sixthPokemon, setSixthPokemon] = useState<string>(defaultImage)
// // const [seventhPokemon, setSeventhPokemon] = useState<string>(defaultImage)
// // const [eighthPokemon, setEighthPokemon] = useState<string>(defaultImage)
// // useEffect(
// //   () => {
// //     if(firstPokemonData) {
// //       setFirstPokemon(firstPokemonData.data.sprites.front_default)
// //     }
// //     if(secondPokemonData) {
// //       setSecondPokemon(secondPokemonData.data.sprites.front_default)
// //     }
// //     if(thirdPokemonData) {
// //       setThirdPokemon(thirdPokemonData.data.sprites.front_default)
// //     }
// //     if(fourthPokemonData) {
// //       setFourthPokemon(fourthPokemonData.data.sprites.front_default)
// //     }
// //     if(fifthPokemonData) {
// //       setFifthPokemon(fifthPokemonData.data.sprites.front_default)
// //     }
// //     if(sixthPokemonData) {
// //       setSixthPokemon(sixthPokemonData.data.sprites.front_default)
// //     }
// //     if(seventhPokemonData) {
// //       setSeventhPokemon(seventhPokemonData.data.sprites.front_default)
// //     }
// //     if(eighthPokemonData) {
// //       setEighthPokemon(eighthPokemonData.data.sprites.front_default)
// //     }
// //   }, [
// //     firstPokemonData, 
// //     secondPokemonData, 
// //     thirdPokemonData, 
// //     fourthPokemonData, 
// //     fifthPokemonData, 
// //     sixthPokemonData, 
// //     seventhPokemonData, 
// //     eighthPokemonData
// //   ]
// // )
// //   if(firstPokemonLoading) {
// //     return <div>Loading...</div>
// //   }
// //   if(firstPokemonIsError) {
// //     return <div>Error: {firstPokemonError?.message}</div>
// //   }
// //   if(firstPokemonData) {
// //     console.log(firstPokemonData)
// //   }
// //   return(
// //     <>
// //       <div className="marquee marquee--8">
// //         <img className="marquee__item" src={firstPokemon} width="96" height="96" alt="" />
// //         <img className="marquee__item" src={secondPokemon} width="96" height="96" alt="" />
// //         <img className="marquee__item" src={thirdPokemon} width="96" height="96" alt="" />
// //         <img className="marquee__item" src={fourthPokemon} width="96" height="96" alt="" />
// //         <img className="marquee__item" src={fifthPokemon} width="96" height="96" alt="" />
// //         <img className="marquee__item" src={sixthPokemon} width="96" height="96" alt="" />
// //         <img className="marquee__item" src={seventhPokemon} width="96" height="96" alt="" />
// //         <img className="marquee__item" src={eighthPokemon} width="96" height="96" alt="" />
// //       </div>
// //       <img src={professorOak} id="imgProfessorOak" alt="Professor Oak" height="64" width="64" />
// //     </>
// //   )
// // }
// // export default Carousel
// describe('Carousel', () => {
//   beforeEach(() => {
//     cy.visit('/')
//   })

//   it('should display loading state', () => {
//     cy.get('.marquee__item').should('have.length', 0)
//     cy.contains('Loading...').should('be.visible')
//   })

//   it('should display error message', () => {
//     cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/*', { statusCode: 500 })
//     cy.reload()
//     cy.contains('Error:').should('be.visible')
//   })

//   it('should display images after data is loaded', () => {
//     cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/*', { fixture: 'pokemon.json' }).as('getPokemon')
//     cy.reload()
//     cy.wait('@getPokemon')
//     cy.get('.marquee__item').should('have.length', 8)
//   })

//   it('should log firstPokemonData', () => {
//     cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/*', { fixture: 'pokemon.json' }).as('getPokemon')
//     cy.reload()
//     cy.wait('@getPokemon')
//     cy.window().then((win) => {
//       cy.stub(win.console, 'log').as('consoleLog')
//     })
//     cy.contains('Log Data').click()
//     cy.get('@consoleLog').should('be.calledWith', 'firstPokemonData')
//   })
// })