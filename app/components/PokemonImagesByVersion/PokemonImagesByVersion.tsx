import Image from 'next/image';
import type { PokemonSprites } from '@/types/pokemon-sprites';

const PokemonImagesByVersion = (sprites: { sprites?: PokemonSprites }) => {
	const imageSource =
		sprites.sprites?.versions?.['generation-iii']?.['firered-leafgreen']?.front_default;
	const pokemonName = 'Pokemon Name';

	return (
		<div className='d-flex'>
			<p>Hello World!</p>
			{imageSource ? (
				<Image
					className='nes-avatar avatar pokemonAvatar'
					alt={'Image of a ' + pokemonName}
					id='avatar'
					src={imageSource}
					width={256}
					height={256}
				/>
			) : (
				<i className='nes-pokeball'></i>
			)}
		</div>
	);
};

export default PokemonImagesByVersion;
