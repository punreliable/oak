import React from 'react';
import Image from 'next/image';
import PokemonDescription from '@/app/components/PokemonDescription';
import PokemonAbilitiesList from '@/app/components/PokemonAbilitiesList';
import PokemonTypeList from '@/app/components/PokemonTypeList';
import PokemonMoveList from '@/app/components/PokemonMoveList';
import prettyName from '@/utilities/prettyName';
import Message from '@/app/components/ProfessorOak/Message';

const ResultHomePokemon = (props: any) => {
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

        <div className='col-lg-3 stats'>
          {props.height && <p>Height: {props.pokemon.height}in</p>}
          {props.weight && <p>Weight: {props.pokemon.weight}lb</p>}
          {props.pokemon.base_experience && <p>Base XP: {props.pokemon.base_experience}xp</p>}
        </div>
      </div>

      <div className='row'>
        <PokemonDescription pokemon={props.pokemon.id} />
      </div>

      <div className='row'>
        <h3 className="h3-responsive">
          Type
        </h3>
      </div>

      <div className='row my-4'>
        <PokemonTypeList types={props.pokemon.types} />
      </div>

      <div className='row my-4'>
        <h3 className="h3-responsive gameboy">Abilities</h3>
      </div>

      <div className='row my-4'>
        <PokemonAbilitiesList abilities={props.pokemon.abilities} />
      </div>

      <div className='row my-4'>
        <h3 className="h3-responsive gameboy">Moves</h3>
      </div>

      <div className='row'>
        <PokemonMoveList moves={props.pokemon.moves} />
      </div>

      <div className='row'>
        <Message pokemon={props.pokemon.id} />
      </div>

    </div>
  
  );
};

export default ResultHomePokemon;
