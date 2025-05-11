import React from 'react';
import prettyName from '../../../utilities/prettyName';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import Error from './Error';
import Pending from './Pending';


const Result = (props: any) => {

console.log('Pokedex: ', props);

console.log('Pokedex Name: ', props.pokedex.name);

console.log('Pokedex URL: ', props.pokedex.pokedexes[0].url);

const { data, isLoading, isError } = useQuery({
    queryKey: ['pokedex'],
    queryFn: async () => {
      const rowStart = 24;
      const res = await axios.get(`${props.pokedex.pokedexes[0].url}`);
      return res.data;
    },
  });


  console.log('Pokedexes: ', data );
  
  if (isLoading) return <Pending />;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <div className='App'>
      <h1>Starters</h1>
      <div className='row rowStats'>
        <div className='col-md-12 col-lg- stats'>
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
            key={data.pokedexes.name}
          >
            <div className='nes-container is-rounded with-title'>
              <Link
                href={`/pokedex/${data.pokedexes.name}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* <Image
                  src={imageUrl}
                  alt={pokemon.name}
                  width={96}
                  height={96}
                  className='rounded-sm'
                /> */}
                {/* <Link className='nes-badge' href={`/${pokemon.name}`}>
                  <span className='is-dark'>{prettyName(pokemon.name)}</span>
                </Link> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Result;
