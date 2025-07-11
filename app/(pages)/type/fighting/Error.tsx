import React from 'react';
import Image from 'next/image';
import unknown from '@/assets/0.png';
import professorOak from '@/assets/oak.svg';

const Error = () => {
  return (
    <div className='App' style={{ display: 'block' }}>
      <section className='nesContainer nes-container'>
        <h1 className='oakHello text-center' style={{ display: 'block' }}>
          Error
        </h1>

        <Image
          className='nes-avatar avatar pokemonAvatar'
          alt='There was an error fetching your pokemon, please try again'
          id='avatar'
          src={unknown}
          style={{ display: 'block' }}
        />

        <div className='row'>
          <div className='col-md-12'>
            <p>There was an error trying to fetch your Pokemon Type. Please try again.</p>
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

export default Error;
