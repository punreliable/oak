import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import prettyName from '@/utilities/prettyName';

export function PokedexRowFive() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokedex-row-five'],
    queryFn: async () => {
      const rowStart = 99;
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${rowStart}`);
      return res.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  const rowData = data.results.map((pokemon: any) => {
    const url = pokemon.url;
    const id = url.split('/')[6];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

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
        key={pokemon.name}
      >
        <div className='nes-container is-rounded with-title'>
          <Link
            href={`/pokedex/${pokemon.name}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={imageUrl}
              alt={pokemon.name}
              width={96}
              height={96}
              className='rounded-sm'
            />
            <Link className='nes-badge' href={`/${pokemon.name}`}>
              <span className='is-dark'>{prettyName(pokemon.name)}</span>
            </Link>
          </Link>
        </div>
      </div>
    );
  });

  return <div className='contributors'>{rowData}</div>;
}
