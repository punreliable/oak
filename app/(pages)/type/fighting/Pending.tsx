import React from 'react';
import Image from 'next/image';
import professorOak from '@/assets/oak.svg';
import FightingTypeIcon from '@/assets/type-icons-white/02-fighting.svg';
const Pending = () => {
  return (
    <>
      <h1 className='oakHello text-center' style={{ display: 'block' }}>
        Loading...
      </h1>

      <Image
        className='nes-avatar avatar pokemonAvatar'
        alt='Pokemon is loading'
        id='avatar'
        src={FightingTypeIcon}
      />

      <div className='row'>
        <div className='col-md-12'>
          <p>Please wait, your Pokemon is being loaded...</p>
        </div>
      </div>

      <section className='message-list messageList' id='professorMessages'>
        <section className='message -right'>
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
    </>
  );
};

export default Pending;
