import { Suspense } from 'react';
import ButtonNewPokemon from '@/app/components/Buttons/ButtonNewPokemon';
// import SinglePokemon from '@/app/components/SinglePokemon/SinglePokemon';
import PendingPokemon from '@/app/components/PendingPokemon';

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

// export default async function Page({ params }: { params: any }) {
export default async function Page() {
	// { params: { name: string }}
	//const pokemonID: string = await params.name;
	//const requestURL: string = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;

	return (
		<div className='App' style={{ margin: 'auto', display: 'block' }}>
			<section
				className='nesContainer nes-container'
				style={{ margin: 'auto', display: 'block' }}
			>
				<h1>Coming Soon</h1>
				<Suspense fallback={<PendingPokemon />}>
					{/* <SinglePokemon name={requestURL} /> */}
					<div className='row my-4' style={{ display: 'block', width: '100%' }}>
						<ButtonNewPokemon />
					</div>
				</Suspense>
			</section>
		</div>
	);
}
