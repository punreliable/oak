'use client';
import { Suspense } from 'react';
import Loading from '@/app/components/Loading';

const ButtonNewPokemon = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className='col-md-12 my-4'>
        <a href={`/`} className={`nes-btn is-success`}>
          Get New Pokemon
        </a>
      </div>
    </Suspense>
  );
};

export default ButtonNewPokemon;
