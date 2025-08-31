'use client';
import React, { useEffect, useState } from 'react';
import EvolutionChainHandler from '@/app/components/EvolutionsByPokemon/EvolutionChainHandler';
import EvolvesFromSpecies from '@/app/components/EvolutionsByPokemon/EvolvesFromSpecies';
import type { PokemonSpecies } from '@/types/pokemon-species';

const EvolutionsHandler = (props: { id: number }) => {

  const [data, setData] = useState<PokemonSpecies | null>(null);
  const [loading, setLoading] = useState(true);
  const pokemonID = props.id.toString();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}`);
        const result: PokemonSpecies = await response.json();
        setData(result);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [pokemonID]);

  if (loading) return <p>Loading...</p>;

  const showEvolvesFromSpecies = data?.evolves_from_species?.url;
  const showEvolutionChain = data?.evolution_chain?.url;

  return (
    <div className='nes-container'>
      {data && (showEvolutionChain || showEvolvesFromSpecies) && (
        <div className='row' style={{ 'width': '100%' }}>
          <h3 className='h3-responsive mb-4'>Evolutions</h3>
        </div>
      )}
      {data && showEvolvesFromSpecies && <EvolvesFromSpecies species={showEvolvesFromSpecies} />}
      {data && showEvolutionChain && <EvolutionChainHandler url={showEvolutionChain} />}
    </div>
  );
};

export default EvolutionsHandler;
