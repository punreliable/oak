import React from 'react';
import Image from 'next/image';
import PokemonDescription from '@/app/components/PokemonDescription';
import PokemonAbilitiesList from '@/app/components/PokemonAbilitiesList';
import PokemonTypeList from '@/app/components/PokemonTypeList';
import PokemonMoveList from '@/app/components/PokemonMoveList';
import prettyName from '@/utilities/prettyName';
import Message from '@/app/components/ProfessorOak/Message';

const Result = (props: any) => {
  const pokemonID: string = props.pokemon.id;

  return (
    <section className='App container'>
      <div className='row'>
        <h1 className='oakHello'>Hello,</h1>
        <h1 className='pokemonName'>{prettyName(props?.pokemon.name)}</h1>
      </div>
      <div className='row'>
        <Image
          className='nes-avatar avatar pokemonAvatar mx-auto'
          alt={'Image of a ' + prettyName(props?.pokemon.name)}
          id='avatar'
          src={props?.pokemon.sprites?.front_default}
          width={256}
          height={256}
        />
      </div>

      <div className='row rowStats'>
        <div className='col-md-12 col-lg-3 stats'>
          {props.height && <p>Height: {props.pokemon.height}in</p>}
          {props.weight && <p>Weight: {props.pokemon.weight}lb</p>}
          {props.pokemon.base_experience && <p>Base XP: {props.pokemon.base_experience}xp</p>}
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
        <PokemonMoveList moves={props.pokemon.moves} />
      </div>
      <Message pokemon={pokemonID} />
    </section>
  );
};

export default Result;
