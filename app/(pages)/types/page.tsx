import './PokemonTypesPage.scss';
import CardPokemonType from '@/app/components/cards/CardPokemonType';

const PagePokemonTypeList = () => {
	return (
		<main className='nes-container gameboy gameboy-screen py-4'>
			<div className='row pb-4'>
				<div className='jumbotron gameboy col-lg-12 pb-4'>
					<h1 className='h1-responsive text-center gameboy pb-2'>Pokémon Types</h1>

					<h2 className='h3-responsive text-center gameboy'>
						Learn all of their&nbsp;advantages, and&nbsp;disadvantages.
					</h2>
				</div>
			</div>

			<div className='row'>
				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Normal',
							link: '/type/normal',
							container: 'normal',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Fighting',
							link: '/type/fighting',
							container: 'fighting',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Flying',
							link: '/type/flying',
							container: 'flying',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Poison',
							link: '/type/poison',
							container: 'poison',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Ground',
							link: '/type/ground',
							container: 'ground',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Rock',
							link: '/type/rock',
							container: 'rock',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Bug',
							link: '/type/bug',
							container: 'bug',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Ghost',
							link: '/type/ghost',
							container: 'ghost',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Steel',
							link: '/type/steel',
							container: 'steel',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Fire',
							link: '/type/fire',
							container: 'fire',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Water',
							link: '/type/water',
							container: 'water',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Grass',
							link: '/type/grass',
							container: 'grass',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Electric',
							link: '/type/electric',
							container: 'electric',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Psychic',
							link: '/type/psychic',
							container: 'psychic',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Ice',
							link: '/type/ice',
							container: 'ice',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Dragon',
							link: '/type/dragon',
							container: 'dragon',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Dark',
							link: '/type/dark',
							container: 'dark',
						}}
					/>
				</div>

				<div className='col-lg-4 col-sm-6'>
					<CardPokemonType
						type={{
							name: 'Fairy',
							link: '/type/fairy',
							container: 'fairy',
						}}
					/>
				</div>
			</div>
			<div className='row'>
				<div className='col-md-12 my-4'>
					<a href={`/`} className={`nes-btn is-warning`}>
						Home
					</a>
				</div>
			</div>
		</main>
	);
};

export default PagePokemonTypeList;
