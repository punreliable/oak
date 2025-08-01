import React from 'react';
import prettyName from '../../../../utilities/prettyName';
import PokemonTypeDamageRelations from '@/app/components/PokemonTypeDamageRelations';

const Result = (props: any) => {
  return (
    <div className='App'>
      <h1 className='responsive-h1 text-center gameboy'>{prettyName(props.type.name)}</h1>
      <PokemonTypeDamageRelations damageRelations={props.type.damage_relations} />
    </div>
  );
};

export default Result;
