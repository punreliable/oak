import React from 'react';
import prettyName from '../../../utilities/prettyName';
import professorOak from '../../../assets/oak.svg';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

const ResultAbilities = (props: any) => {
  const abilities = props.abilities.results;
  const abilityItems = abilities.map((ability: any) => (
    <li key={uuidv4()}>{prettyName(ability.name)}</li>
  ));

  return (
    <div className='App container-fluid'>
      <div className='row py-4'>
        <h1 className='oakHello text-center'>Abilities</h1>
      </div>
      <div className='row py-4 mx-auto'>
        <Image src={professorOak} height={64} width={64} alt='Professor Oak' id='imgProfessorOak' />
      </div>
      <div className='row'>
        <div className='col-md-12 lists'>
          <ul className='nes-list is-disc'>{abilityItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default ResultAbilities;
