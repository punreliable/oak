import React, {useState} from 'react';
import Link from 'next/link';
import prettyName from '../../../utilities/prettyName';
import { v4 as uuidv4 } from 'uuid';

const ResultAbility = (props: any) => {

  const abilities = props.ability.results;
  console.log(abilities);
  const selectedAbility = 1;
  const abilityItems = abilities.map((ability: any) => (
    <li key={uuidv4()}>
      <Link href={`/ability/${selectedAbility}`}>
        {prettyName(ability.name)}
      </Link>
    </li>
  ));

  return (
    <div className='App container'>
      <div className='row py-4'>
        <h1 className='text-center'>Abilities</h1>
      </div>
      <div className='row'>
        <div className='col-md-12 lists'>
          <ul className='nes-list is-disc'>{abilityItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default ResultAbility;
