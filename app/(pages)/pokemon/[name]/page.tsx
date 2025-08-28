import prettyName from '@/utilities/prettyName';
import { Pokemon } from '@/types/pokemon';
import PokemonDescription from '@/app/components/PokemonDescription';
import { Suspense } from 'react';
import PendingPokemon from '../Pending';

export interface Result {
  name: string;
  url: string;
}
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}

export const revalidate = 60;

export async function generateStaticParams() {
  const abilityList: PokemonListResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/`).then(
    (res) => res.json(),
  );
  return abilityList.results.map((result) => ({
    name: String(result.name),
  }));
}

export default async function Page({ params }: { params: any }) {
  const { name } = await params;
  const post: Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
    res.json(),
  );

  return (
    <section className='App nes-container container'>
      <div className='row' style={{ display: 'block', width: '100%' }}>
        <h1
          className='responsive-h1 text-center gameboy mb-4'
          style={{ display: 'block', minWidth: '100%' }}
        >
          {prettyName(post.name)}
        </h1>
      </div>
      <PokemonDescription pokemon={post.id} />
      <div className='row'>
        <div className='col-md-12'>
          <p className='responsive-h3 darkest-green my-4'>More Details Coming Soon</p>
        </div>
      </div>
      <div className='row my-4' style={{ display: 'block', width: '100%' }}>
        <div className='col-md-12 my-4'>
          <a href={`/`} className={`nes-btn is-warning`}>
            Home
          </a>
        </div>
      </div>
    </section>
  );
}
