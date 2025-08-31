import React from 'react';
import Image from 'next/image';
import PokemonDescription from '@/app/components/PokemonDescription';
import PokemonStats from '@/app/components/PokemonStats';
import PokemonAbilitiesList from '@/app/components/PokemonAbilitiesList';
import PokemonTypeList from '@/app/components/PokemonTypeList';
import PokemonMoveList from '@/app/components/PokemonMoveList';
import transformWords from '@/utilities/transformWords';
import Message from '@/app/components/ProfessorOak/Message';

const Result = (props: any) => {
  const pokemonID: string = props.pokemon.id;
  console.log('Pokemon ID: ', pokemonID);

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

      <div className='row rowStats'>
        <div className='col-md-12 col-lg-3 stats'>
          <PokemonStats pokemon={props.pokemon} />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 col-lg-9'>
          <PokemonDescription pokemon={props.pokemon.id} />
        </div>
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
