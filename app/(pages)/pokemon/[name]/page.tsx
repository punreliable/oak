import { Suspense } from 'react';
import ButtonNewPokemon from '@/app/components/Buttons/ButtonNewPokemon';
import PendingPokemon from '@/app/components/PendingPokemon';
import transformWords from '@/utilities/transformWords';
import { Pokemon } from '@/types/pokemon';
import Message from '@/app/components/ProfessorOak/Message';
import PokemonMoveList from '@/app/components/PokemonMoveList';
import PokemonAbilitiesList from '@/app/components/PokemonAbilitiesList';
import PokemonTypeList from '@/app/components/PokemonTypeList';
import Image from 'next/image';
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
	const pokemonList: PokemonListResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/`).then(
		(res) => res.json(),
	);
	return pokemonList.results.map((result) => ({
		name: String(result.name),
	}));
}

export default async function Page({ params }: { params: { name: string } }) {
	const requestURL: string = await `https://pokeapi.co/api/v2/pokemon/${params.name}`;
	const post: Pokemon = await fetch(requestURL).then((res) => res.json());

	return (
		<div className='App' style={{ margin: 'auto', display: 'block' }}>
			<section
				className='nesContainer nes-container'
				style={{ margin: 'auto', display: 'block' }}
			>
				<Suspense fallback={<PendingPokemon />}>
					<>
						<h1 className='oakHello'>Hello,</h1>

						{post && (
							<>
								<h1 className='pokemonName'>{transformWords(post.name)}</h1>

								<Image
									className='nes-avatar avatar pokemonAvatar'
									alt={'Image of a ' + transformWords(post.name)}
									id='avatar'
									src={post.sprites.front_default}
									width={256}
									height={256}
								/>

								<div className='row my-4'>
									<PokemonTypeList types={post.types} />
								</div>

								<div className='row my-4'>
									<PokemonAbilitiesList abilities={post.abilities} />
								</div>

								<div className='row my-4'>
									<h3 className='h3-responsive gameboy'>Moves</h3>
								</div>

								<div className='row'>
									{post.id && post.moves && (
										<PokemonMoveList
											moves={post.moves}
											from={post.id.toString()}
										/>
									)}
								</div>

								<div className='row'>
									<Message pokemon={post.id.toString()} />
								</div>
							</>
						)}
					</>
				</Suspense>
				<div className='row my-4' style={{ display: 'block', width: '100%' }}>
					<ButtonNewPokemon />
				</div>
			</section>
		</div>
	);
}
