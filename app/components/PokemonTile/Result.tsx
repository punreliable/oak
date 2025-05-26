import React from 'react';
import Image from 'next/image';
import prettyName from '../../../utilities/prettyName';
import Link from 'next/link';

const Result = (props: any) => {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
        float: 'left',
      }}
    >
      <div className='nes-container is-rounded with-title'>
        <Link
          href={`/pokemon/${props.pokemon.name}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            src={props.pokemon.sprites?.front_default || '/placeholder.png'}
            alt={prettyName(props.pokemon.name) || 'Pokemon'}
            width={96}
            height={96}
            className='rounded-sm'
          />
          <Link className='nes-badge' href={`/pokemon/${props.pokemon.name}`}>
            <span className='is-dark'>{prettyName(props.pokemon.name)}</span>
          </Link>
        </Link>
      </div>
    </div>
    );
};

export default Result;
