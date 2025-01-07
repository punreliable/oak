import React from 'react';
import PokemonDescription from '../../components/PokemonDescription';
import PokemonTypeList from '../../components/PokemonTypeList';
import PokemonMoveList from '../../components/PokemonMoveList';
import prettyName from '../../../utilities/prettyName';
import professorOak from '../../../assets/oak.svg';

const Result = (props: any) => {
  console.log(props);

  return (
    <div className='App'>
      <h1 className='oakHello'>Hello,</h1>

      <h1 className='pokemonName'>{prettyName(props?.pokemon.name)}</h1>

      <img
        className='nes-avatar avatar pokemonAvatar'
        alt={'Image of a ' + prettyName(props?.pokemon.name)}
        id='avatar'
        src={props?.pokemon.sprites?.front_default}
      />

      <div className='row rowStats'>
        <div className='col-md-12 col-lg-3 stats'>
          {props.height && <p>Height: {props.pokemon.height}in</p>}
          <p>Weight: {props.pokemon.weight}lb</p>
          <p>Base XP: {props.pokemon.base_experience}xp</p>
        </div>
        <div className='col-md-12 col-lg-9'>
          <PokemonDescription pokemon={props.pokemon.id} />
        </div>
      </div>

      <PokemonTypeList types={props.pokemon.types} />

      <PokemonMoveList moves={props.pokemon.moves} />

      <section
        className='message-list messageList'
        id='professorMessages'
        // unresolved
      >
        <section className='message -right'>
          <div className='nes-balloon from-right'>
            <p>
              Entry #{props?.pokemon.id} in <br />
              Kanto Pokedex!
            </p>
          </div>
          <div className='wrapperOak'>
            <img
              src={professorOak}
              id='imgProfessorOak'
              alt='Professor Oak'
              height='64'
              width='64'
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Result;
