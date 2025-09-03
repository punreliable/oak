import prettyName from '@/utilities/prettyName';
import Image from 'next/image';
import { Pokemon } from '@/types/pokemon';
import PokemonDescription from '@/app/components/PokemonDescription';
import PokemonStats from '@/app/components/PokemonStats';
import PokemonAbilitiesList from '@/app/components/PokemonAbilitiesList';
import PokemonMoveList from '@/app/components/PokemonMoveList';
import PokemonTypeList from '@/app/components/PokemonTypeList';
import Message from '@/app/components/ProfessorOak/Message';
import { Suspense } from 'react';
import PendingPokemon from '../Pending';
import ButtonNewPokemon from '@/app/components/Buttons/ButtonNewPokemon';

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
  const pokemon: Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
    res.json(),
  );

  return (
    <Suspense fallback={<PendingPokemon />}>
      <div className='App' style={{ margin: 'auto', display: 'block' }}>
        <section
          className='nesContainer nes-container'
          style={{ margin: 'auto', display: 'block' }}
        >
          <h1 className='oakHello'>Hello,</h1>

          <h1 className='pokemonName'>{prettyName(pokemon.name)}</h1>

          <Image
            className='nes-avatar avatar pokemonAvatar'
            alt={'Image of a ' + prettyName(pokemon.name)}
            id='avatar'
            src={pokemon.sprites.front_default}
            width={256}
            height={256}
          />
          <div className='row'>
            <div className='col-lg-8'>
              <PokemonDescription data={pokemon} />
            </div>
            {/* <div className='col-lg-4'>
              <PokemonStats pokemon={pokemon} />
            </div> */}
          </div>
          <div className='row'>
            <h3 className='h3-responsive'>Type</h3>
          </div>

          <div className='row my-4'>
            <PokemonTypeList types={pokemon.types} />
          </div>

          <div className='row my-4'>
            <h3 className='h3-responsive gameboy'>Abilities</h3>
          </div>

          <div className='row my-4'>
            <PokemonAbilitiesList abilities={pokemon.abilities} />
          </div>

          <div className='row my-4'>
            <h3 className='h3-responsive gameboy'>Moves</h3>
          </div>

          <div className='row'>
            {pokemon.id && pokemon.moves && (
              <PokemonMoveList moves={pokemon.moves} from={pokemon.id.toString()} />
            )}
          </div>

          <div className='row'>
            <Message pokemon={pokemon.id.toString()} />
          </div>

          <div className='row my-4' style={{ display: 'block', width: '100%' }}>
            <ButtonNewPokemon />
          </div>
        </section>
      </div>
    </Suspense>
  );
}
