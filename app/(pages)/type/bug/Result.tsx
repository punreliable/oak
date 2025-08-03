'use client';
import React from 'react';
import PokemonTypeDamageRelations from '@/app/components/PokemonTypeDamageRelations';

const Result = (props: any) => {
  return (
    <>
      <div className='row'>
        <h1 className='responsive-h1 text-center gameboy'>Damage Relations</h1>
      </div>
      <PokemonTypeDamageRelations damage_relations={props.type.damage_relations} />
    </>
  );
};

export default Result;
