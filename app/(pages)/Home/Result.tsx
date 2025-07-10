import React from 'react';
import Image from 'next/image';
import PokemonDescription from '../../components/PokemonDescription';
import PokemonAbilitiesList from '../../components/PokemonAbilitiesList';
import PokemonTypeList from '../../components/PokemonTypeList';
import PokemonMoveList from '../../components/PokemonMoveList';
import prettyName from '../../../utilities/prettyName';
import Message from '@/app/components/ProfessorOak/Message';

const Result = (props: any) => {
  return (
    <div className='App'>
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
      <div className='row rowStats'>
        <div className='col-md-12 col-lg-3 stats'>
          {props.height && <p>Height: {props.pokemon.height}in</p>}
          {props.weight && <p>Weight: {props.pokemon.weight}lb</p>}
          {props.pokemon.base_experience && <p>Base XP: {props.pokemon.base_experience}xp</p>}
        </div>

        <PokemonDescription pokemon={props.pokemon.id} />

        <PokemonTypeList types={props.pokemon.types} />

        <PokemonAbilitiesList abilities={props.pokemon.abilities} />

        <PokemonMoveList moves={props.pokemon.moves} />

        <Message pokemon={props.pokemon.id} />
      </div>
    </div>
  );
};

export default Result;
