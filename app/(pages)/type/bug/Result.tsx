'use client';
import React from 'react';
import type { DamageRelationsType } from '@/types/PokemonTypeDamageRelations';
import PokemonTypeDamageRelations from '@/app/components/PokemonTypeDamageRelations';
import {DoubleDamageFrom} from '@/app/components/DamageRelations/DoubleDamageFrom';

const Result = (props: DamageRelationsType) => {
  const doubleDamageFrom = props.damage_relations.double_damage_from;
  return(
    <>
      <div className='row'>
        <h1 className='responsive-h1 text-center gameboy'>Damage Relations</h1>
      </div>

      <div className='row py-4'>
        {doubleDamageFrom && (
          <div className='col'>
            <DoubleDamageFrom types={doubleDamageFrom} />
          </div>
        )}
      </div>
      {/* <PokemonTypeDamageRelations damage_relations={props.damage_relations} /> */}
    </>
  );
};

export default Result;
