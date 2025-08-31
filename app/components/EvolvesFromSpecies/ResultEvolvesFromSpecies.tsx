import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { Pokemon } from '@/types/pokemon';
import transformWords from '@/utilities/transformWords';
import PendingPokemon from '@/app/components/TilePokemon/Pending';
import ErrorPokemon from '@/app/components/TilePokemon/Error';

const ResultEvolvesFromSpecies = (props: string) => {
  const url = props;

  interface PokemonFromAPI {
    data: Pokemon;
    status: number;
  }

  const fetchParentPokemon = async (requestURL: string) => {
    const response: PokemonFromAPI = await axios.get(requestURL);
    if (response?.status !== 200) {
      throw new Error('Evolution Chains could not be found.');
    }
    return response;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['parent', url],
    queryFn: () => fetchParentPokemon(url),
  });

  {
    isLoading && <PendingPokemon />;
  }

  {
    isError && <ErrorPokemon />;
  }
  {
    data && (
      <div className='contributors'>
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
              href={`/pokemon/${data.data?.name}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                src={data.data.sprites.front_default}
                alt={transformWords(data.data.name)}
                width={96}
                height={96}
                className='rounded-sm'
              />
            </Link>
            <Link className='nes-badge' href={`/pokemon/${data.data.name}`}>
              <span className='is-dark'>{transformWords(data.data.name)}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default ResultEvolvesFromSpecies;
