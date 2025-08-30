import React from 'react';
import Image from 'next/image';
import PokemonDescription from '@/app/components/PokemonDescription';
import PokemonStats from '@/app/components/PokemonStats';
import PokemonAbilitiesList from '@/app/components/PokemonAbilitiesList';
import PokemonTypeList from '@/app/components/PokemonTypeList';
import MovesByPokemon from '@/app/components/MovesByPokemon';
import prettyName from '@/utilities/prettyName';
import Message from '@/app/components/ProfessorOak/Message';
import Evolutions from '@/app/components/Evolutions';

const ResultEvolvesFromSpecies = (props: any) => {
  
  console.log('Pokemon Data: ', props);

  return (
    <div className='container'>
      <h1 className='oakHello'>Hello,</h1>

      <h1 className='pokemonName'>{prettyName(props?.pokemon.name)}</h1>

      <Image
        className='nes-avatar avatar pokemonAvatar'
        alt={'Image of a ' + prettyName(props?.pokemon.name)}
        id='avatar'
        src={props?.pokemon.sprites?.front_default}
        width={256}
        height={256}
      />

      <div className='row'>
        <div className='col-lg-8'>
          <PokemonDescription pokemon={props.pokemon.id} />
        </div>
        <div className='col-lg-4'>
          <PokemonStats pokemon={props.pokemon} />
        </div>
      </div>

      <div className='row'>
        <h3 className='h3-responsive'>Type</h3>
      </div>

      <div className='row my-4'>
        <PokemonTypeList types={props.pokemon.types} />
      </div>

      <div className='row'>
        <h3 className='h3-responsive'>Evolutions</h3>
      </div>

      <div className='row my-4'>
        <h3 className='h3-responsive gameboy'>Abilities</h3>
      </div>

      <div className='row my-4'>
        <PokemonAbilitiesList abilities={props.pokemon.abilities} />
      </div>

      <div className='row my-4'>
        <h3 className='h3-responsive gameboy'>Moves</h3>
      </div>

      {props.pokemon.id && props.pokemon.moves && (
        <MovesByPokemon moves={props.pokemon.moves} from={props.pokemon.id} />
      )}

      <div className='row'>
        <Message pokemon={props.pokemon.id} />
      </div>
    </div>
  );
};

export default ResultEvolvesFromSpecies;
