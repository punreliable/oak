'use client';
import React, { useEffect, useState } from 'react';
import EvolutionChainHandler from '@/app/components/EvolutionsByPokemon/EvolutionChainHandler';
import EvolvesFromSpecies from '@/app/components/EvolutionsByPokemon/EvolvesFromSpecies';
import type { PokemonSpecies } from '@/types/pokemon-species';

const EvolutionsHandler = (props: { id: number }) => {
  console.log('I am in the Evolution Handler Component');

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

  {
    data &&
      console.log(
        'Evolution Chain: ',
        data?.evolution_chain?.url ? data?.evolution_chain.url : 'Not on an Evolution Chain.',
      );
  }
  {
    data &&
      console.log(
        'Evolves From Species: ',
        data?.evolves_from_species?.url
          ? data?.evolves_from_species.url
          : 'This is a basic Pokemon.',
      );
  }

  const showEvolvesFromSpecies = data?.evolves_from_species?.url;
  const showEvolutionChain = data?.evolution_chain?.url;

  return (
    <div className='nes-container'>
      {data && (showEvolutionChain || showEvolvesFromSpecies) && (
        <div className='row'>
          <h3 className='h3-responsive'>Evolutions</h3>
        </div>
      )}
      {data && showEvolvesFromSpecies && <EvolvesFromSpecies species={showEvolvesFromSpecies} />}
      {data && showEvolutionChain && <EvolutionChainHandler url={showEvolutionChain} />}
    </div>
  );
};

export default EvolutionsHandler;
