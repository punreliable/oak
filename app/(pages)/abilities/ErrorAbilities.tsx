import React from 'react';
const unknown = require('../../../assets/0.png').default;
const professorOak = require('../../../assets/oak.svg').default;

import Image from 'next/image';

const ErrorAbilities  = () => {
  return (
    <div className='App'>
      <section className='nesContainer nes-container'>
        <h1 className='oakHello'>Error</h1>

        <Image
          src={unknown}
          height={64}
          width={64}
          className='nes-avatar avatar pokemonAvatar'
          alt='There was an error fetching your pokemon, please try again'
          id='avatar'

        />

        <div className='row'>
          <div className='col-md-12'>
            <p>
              There was an error trying to fetch your Pokemon. Please try again.
            </p>
          </div>
        </div>

        <section className='message-list messageList' id='professorMessages'>
          <section className='message -right'>
            <div className='nes-balloon from-right'>
              <p>Please try again!</p>
            </div>
            <div className='wrapperOak'>
              <Image
                src={professorOak}
                id='imgProfessorOak'
                alt='Professor Oak'
                height={64}
                width={64}
              />
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default ErrorAbilities;
