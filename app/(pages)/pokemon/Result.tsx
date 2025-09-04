import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import PokemonDescription from '@/app/components/PokemonDescription';
import PokemonStats from '@/app/components/PokemonStats';
import PokemonAbilitiesList from '@/app/components/PokemonAbilitiesList';
import PokemonTypeList from '@/app/components/PokemonTypeList';
import PokemonMoveList from '@/app/components/PokemonMoveList';
import transformWords from '@/utilities/transformWords';
import Message from '@/app/components/ProfessorOak/Message';
import EvolutionsHandler from '@/app/components/EvolutionsByPokemon/EvolutionsHandler';
import type { PokemonSpecies } from '@/types/pokemon-species';
import PendingPokemon from '@/app/components/PendingPokemon';
import ErrorPokemon from '@/app/components/ErrorPokemon';

interface PokemonSpeciesFromAPI {
  species: PokemonSpecies;
  status: number;
}

const Result = (props: any) => {
  const pokemonID: string = props.pokemon.id;

  async function fetchSpeciesData(requestURL: string) {
    const response: PokemonSpeciesFromAPI = await axios.get(requestURL);
    if (response.status !== 200) {
      throw new Error('Evolves from Species, could not be found.');
    }
    return response;
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['species'],
    queryFn: () =>
      fetchSpeciesData(`https://pokeapi.co/api/v2/pokemon-species/${props.pokemon.name}`),
  });

  {
    isLoading && <PendingPokemon />;
  }
  {
    isError && <ErrorPokemon />;
  }

  return (
    <section className='App container'>
      <div className='row'>
        <h1 className='oakHello'>Hello,</h1>
        <h1 className='pokemonName'>{transformWords(props?.pokemon.name)}</h1>
      </div>
      <div className='row'>
        <Image
          className='nes-avatar avatar pokemonAvatar mx-auto'
          alt={'Image of a ' + transformWords(props?.pokemon.name)}
          id='avatar'
          src={props?.pokemon.sprites?.front_default}
          width={256}
          height={256}
        />
      </div>

      <div className='row'>
        <div className='col-lg-8' style={{ order: '2' }}>
          <PokemonDescription data={props.pokemon} />
        </div>
        <div className='col-lg-4' style={{ order: '1' }}>
          {data && <PokemonStats data={props.pokemon} stats={data.species} />}
        </div>
      </div>

      <div className='row my-4'>
        <EvolutionsHandler id={props.pokemon.id} />
      </div>

      <div className='row'>
        <PokemonTypeList types={props.pokemon.types} />
      </div>
      <div className='row'>
        <PokemonAbilitiesList abilities={props.pokemon.abilities} />
      </div>
      <div className='row'>
        {pokemonID && props.pokemon.moves && (
          <PokemonMoveList moves={props.pokemon.moves} from={pokemonID} />
        )}
      </div>
      <Message pokemon={pokemonID} />
    </section>
  );
};

export default Result;
