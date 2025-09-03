'use client';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import transformWords from '@/utilities/transformWords';
import PendingPokemon from '@/app/components/PendingPokemon';
import ErrorPokemon from '@/app/components/ErrorPokemon';
import type { Pokemon } from '@/types/pokemon';

interface PokemonFromAPI {
  data: Pokemon;
  status: number;
}
const CardPokemonType = (props: { link: string }) => {
  const [link, setLink] = useState('');
  setLink(props.link);

  async function fetchParentPokemon(url: string) {
    const response = await axios.get(url);
    return response.data;
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ['parent-pokemon'],
    queryFn: async () => fetchParentPokemon(link),
  });

  console.log('Props: ', data);

  {
    isLoading && <PendingPokemon />;
  }
  {
    isError && <ErrorPokemon />;
  }
  {
    data && (
      <div className='card is-dark member-card clickable'>
        <div className='card-body' style={{ position: 'relative' }}>
          <div className='avatar gameboy'>
            <Image
              className='nes-avatar avatar pokemonAvatar'
              alt={'Image of a ' + transformWords(data?.name)}
              id='avatar'
              src={data?.sprites?.front_default}
              width={256}
              height={256}
            />
          </div>
        </div>
        <Link href={`/pokemon/${data.name}`} className='nes-btn gameboy'>
          {transformWords(data.name)}
        </Link>
      </div>
    );
  }
};

export default CardPokemonType;
