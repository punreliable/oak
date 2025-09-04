'use client';
import { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PendingPokemon from '@/app/components/PendingPokemon';
import ErrorPokemon from '@/app/components/ErrorPokemon';
import type { Pokemon } from '@/types/pokemon';
// import PokemonDescription from '@/app/components/PokemonDescription';
// import PokemonStats from '@/app/components/PokemonStats';
import PokemonAbilitiesList from '@/app/components/PokemonAbilitiesList';
import PokemonMoveList from '@/app/components/PokemonMoveList';
import PokemonTypeList from '@/app/components/PokemonTypeList';
import Message from '@/app/components/ProfessorOak/Message';
import transformWords from '@/utilities/transformWords';
import Image from 'next/image';

async function fetchSinglePokemon(url: string) {
  const pokemon: Pokemon = await axios.get(url);
  return pokemon;
}

const SinglePokemon = (url: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['single-pokemon'],
    queryFn: async () => fetchSinglePokemon(url),
  });

  {
    isLoading && <PendingPokemon />;
  }

  {
    isError && <ErrorPokemon />;
  }

  console.log('Data: ', data);

  return (
    <>
      <Suspense fallback={<PendingPokemon />}>
        <h1 className='oakHello'>Hello,</h1>

        {data && (
          <>
            <h1 className='pokemonName'>{transformWords(data.name)}</h1>

            <Image
              className='nes-avatar avatar pokemonAvatar'
              alt={'Image of a ' + transformWords(data.name)}
              id='avatar'
              src={data.sprites.front_default}
              width={256}
              height={256}
            />
            <div className='row'>
              {/* <div className='col-lg-8'>
				<PokemonDescription data={pokemon} />
			</div> */}
              {/* <div className='col-lg-4'>
				<PokemonStats data={pokemon} stats={} />
			</div> */}
            </div>
            <div className='row'>
              <h3 className='h3-responsive'>Type</h3>
            </div>

            <div className='row my-4'>
              <PokemonTypeList types={data.types} />
            </div>

            <div className='row my-4'>
              <h3 className='h3-responsive gameboy'>Abilities</h3>
            </div>

            <div className='row my-4'>
              <PokemonAbilitiesList abilities={data.abilities} />
            </div>

            <div className='row my-4'>
              <h3 className='h3-responsive gameboy'>Moves</h3>
            </div>

            <div className='row'>
              {data.id && data.moves && (
                <PokemonMoveList moves={data.moves} from={data.id.toString()} />
              )}
            </div>

            <div className='row'>
              <Message pokemon={data.id.toString()} />
            </div>
          </>
        )}
      </Suspense>
    </>
  );
};

export default SinglePokemon;
