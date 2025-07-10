'use client';
import React from 'react';
import Image from 'next/image';
import prettyName from '@/utilities/prettyName';
import FightingTypeIcon from '@/assets/type-icons-color/02-fighting.svg';

const Result = (props: any) => {
  return (
    <div className='App' style={{ margin: 'auto' }}>
      <section className='nesContainer nes-container'>
        <h1 className='oakHello'>Hello,</h1>
        <h1 className='pokemonName'>{prettyName(props?.type.name)}</h1>
        <Image
          className='nes-avatar avatar pokemonAvatar'
          alt={'Image of the Fighting Pokemon Type'}
          id='avatar'
          src={FightingTypeIcon}
          width={256}
          height={256}
        />
      </section>
    </div>
  );
};

export default Result;
