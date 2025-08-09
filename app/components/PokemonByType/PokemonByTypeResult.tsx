'use client';
import React from 'react';
import prettyName from '@/utilities/prettyName';

const PokemonByTypeResult = (props: any) => {
  const pokemon = props.pokemon.pokemon;
  const pokemonList = pokemon.map((obj: {pokemon: { name: string;}}) => (
    <a
      key={obj.pokemon.name}
      className={`nes-btn is-error my-2 mx-2`}
      href={'/type/' + obj.pokemon.name}
    >
      {prettyName(obj.pokemon.name)}
    </a>
  ));
  return (
    <>
      <div className='row py-4 px-4'>
        <h2 className='responsive-h2 text-center gameboy'>Pokemon</h2>
        {pokemonList && pokemonList.length > 0 && (
          <div className='col my-4 mx-4'>
            {pokemonList}
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonByTypeResult;
