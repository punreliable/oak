'use client';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import prettyName from '@/utilities/prettyName';

export function getPokemonIDFromURL(url: string) {
  let output = url;
  output = output.slice(0, -1);
  output = output.slice(38);
  return Number(output);
}

const PokemonByTypeResult = (props: {
  pokemon: { pokemon: [{ name: string; url: string }] };
  slot?: number;
}) => {
  const classes: string = 'nes-btn is-error my-2 mx-2';
  let classesOutPut = '';
  const pokemon = props.pokemon.pokemon;
  const pokemonList: any = pokemon.map((pokemonItem: { name: string; url: string }) => {
    if (getPokemonIDFromURL(pokemonItem.url) > 151) {
      classesOutPut = classes + ' hidden';
    } else {
      classesOutPut = classes;
    }
    return (
      <a key={pokemonItem.name} className={classesOutPut} href={'/pokemon/' + pokemonItem.name}>
        {prettyName(pokemonItem.name)}
      </a>
    );
  });
  return (
    <>
      <div className='row py-4 px-4'>
        <h2 className='responsive-h2 text-center gameboy'>Pokemon</h2>
        {pokemonList && pokemonList.length > 0 && (
          <div className='col my-4 mr-4' key={uuidv4()}>
            {pokemonList}
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonByTypeResult;
