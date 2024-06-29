import { vi, describe, expect, it, beforeEach, afterEach } from 'vitest'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Pokemon } from '../../pokemon.js'
import professorOak from '../assets/professorOak.svg'
// import unsurePokemon from '../assets/0.png'
import { getRandomKantoPokemon } from '../utilities/getRandomKantoPokemon.js'
import './Carousel.scss'
import { render, screen } from '@testing-library/react'
import Carousel from '../components/Carousel'
import React from 'react'

describe('Carousel', () => {
  let queryClient: QueryClient

  beforeEach(() => {
    queryClient = new QueryClient()
  })

  afterEach(() => {
    queryClient.clear()
  })

  it('should display loading state', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Carousel />
      </QueryClientProvider>
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should display error message', async () => {

    queryClient.useQuery.mockImplementationOnce(() => {
      throw new Error('Failed to fetch data')
    })

    render(
      <QueryClientProvider client={queryClient}>
        <Carousel />
      </QueryClientProvider>
    )

    expect(screen.getByText('Error: Failed to fetch data')).toBeInTheDocument()
  })

  it('should display images after data is loaded', async () => {
    queryClient.useQuery.mockImplementationOnce(() => ({
      data: { sprites: { front_default: 'image1.png' } },
      isLoading: false,
      error: null,
    }))
    queryClient.useQuery.mockImplementationOnce(() => ({
      data: { sprites: { front_default: 'image2.png' } },
      isLoading: false,
      error: null,
    }))
    // Repeat the above pattern for the remaining queries

    render(
      <QueryClientProvider client={queryClient}>
        <Carousel />
      </QueryClientProvider>
    )

    expect(screen.getAllByRole('img')).toHaveLength(8)
  })

  it('should log firstPokemonData', async () => {
    const consoleLogSpy = vi.spyOn(console, 'log')

    queryClient.useQuery.mockImplementationOnce(() => ({
      data: { sprites: { front_default: 'image1.png' } },
      isLoading: false,
      error: null,
    }))

    render(
      <QueryClientProvider client={queryClient}>
        <Carousel />
      </QueryClientProvider>
    )

    expect(screen.getByText('Log Data')).toBeInTheDocument()

    screen.getByText('Log Data').click()

    expect(consoleLogSpy).toHaveBeenCalledWith('firstPokemonData')
  })
})