import React from 'react';
import Image from 'next/image';
import prettyName from '../../../utilities/prettyName';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import Error from './Error';
import Pending from './Pending';

const Result = (props: any) => {

// console.log('Details: ', prettyName(props.pokemon.name));

// console.log('Pokedex Name: ', props.pokedex.name);

// console.log('Pokedex URL: ', props.pokedex.pokedexes[0].url);

// const { data, isLoading, isError } = useQuery({
//     queryKey: ['pokemon-species'],
//     queryFn: async () => {
//       const res = await axios.get(`${props.data}`);
//       return res.data;
//     },
//   });


  // console.log('Pokedexes: ', data.pokemon );
  
  // if (isLoading) return <Pending />;
  // if (isError) return <Error />;

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
