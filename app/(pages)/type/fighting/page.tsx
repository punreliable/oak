import React from 'react';
import Image from 'next/image';
import FightingTypeIcon from '@/assets/type-icons-color/02-fighting.svg';

const PokemonTypeFightingPage = () => {
  return (
    <div className='App' style={{ margin: 'auto' }}>
      <h1>Fighting Type</h1>
      <h3>More Details Coming Soon.</h3>
      <Image
        className='nes-avatar avatar pokemonAvatar'
        alt={'Image of the Fighting Pokemon Type'}
        id='avatar'
        src={FightingTypeIcon}
        width={256}
        height={256}
      />
    </div>
  );
};

export default PokemonTypeFightingPage;
