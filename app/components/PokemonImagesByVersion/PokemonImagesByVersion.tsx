import Image from 'next/image';
import type { PokemonSprites } from '@/types/pokemon-sprites';

const getSpriteUrls = (value: unknown): string[] => {
	if (typeof value === 'string') {
		return [value];
	}

	if (!value || typeof value !== 'object') {
		return [];
	}

	return Object.values(value).flatMap(getSpriteUrls);
};

const PokemonImagesByVersion = (props: { sprites?: PokemonSprites; name?: string }) => {
	const imageSources = getSpriteUrls(props.sprites);

	return (
		<div className='d-inline-flex justify-content-center align-self-center flex-wrap'>
			{imageSources.length > 0 ? (
				imageSources.map((imageSource, index) => (
					<Image
						key={`${imageSource}-${index}`}
						className='nes-avatar avatar pokemonAvatar'
						alt={'Image of ' + (props?.name ?? 'Pokemon Name')}
						title={'Image of ' + (props?.name ?? 'Pokemon Name')}
						id={`avatar-${index}`}
						src={imageSource}
						width={256}
						height={256}
					/>
				))
			) : (
				<i className='nes-pokeball'></i>
			)}
		</div>
	);
};

export default PokemonImagesByVersion;
