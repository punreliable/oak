type SpriteUrl = string | null;

interface PokemonSpriteSet {
	back_default: SpriteUrl;
	back_female: SpriteUrl;
	back_shiny: SpriteUrl;
	back_shiny_female: SpriteUrl;
	front_default: SpriteUrl;
	front_female: SpriteUrl;
	front_shiny: SpriteUrl;
	front_shiny_female: SpriteUrl;
}

interface PokemonGenerationISpriteSet {
	back_default: SpriteUrl;
	back_gray: SpriteUrl;
	back_transparent: SpriteUrl;
	front_default: SpriteUrl;
	front_gray: SpriteUrl;
	front_transparent: SpriteUrl;
}

interface PokemonGenerationIISpriteSet {
	back_default: SpriteUrl;
	back_shiny: SpriteUrl;
	front_default: SpriteUrl;
	front_shiny: SpriteUrl;
	front_transparent: SpriteUrl;
}

interface PokemonGenerationIICrystalSpriteSet extends PokemonGenerationIISpriteSet {
	animated?: {
		front_default: SpriteUrl;
		front_shiny: SpriteUrl;
	};
	back_shiny_transparent: SpriteUrl;
	front_shiny_transparent: SpriteUrl;
	back_transparent: SpriteUrl;
}

interface PokemonGenerationIIISpriteSet {
	front_default: SpriteUrl;
	front_shiny: SpriteUrl;
}

interface PokemonGenerationIIIBattleSpriteSet {
	back_default: SpriteUrl;
	back_shiny: SpriteUrl;
	front_default: SpriteUrl;
	front_shiny: SpriteUrl;
}

interface PokemonGenerationIVSpriteSet extends PokemonSpriteSet {}

interface PokemonGenerationVAnimatedSpriteSet extends PokemonSpriteSet {
	animated: PokemonSpriteSet;
}

interface PokemonGenerationVISpriteSet {
	front_default: SpriteUrl;
	front_shiny: SpriteUrl;
	front_female: SpriteUrl;
	front_shiny_female: SpriteUrl;
}

interface PokemonGenerationVIISpriteSet {
	front_default: SpriteUrl;
	front_shiny: SpriteUrl;
	front_female: SpriteUrl;
	front_shiny_female: SpriteUrl;
}

interface PokemonSpriteIcons {
	front_default: SpriteUrl;
	front_female: SpriteUrl;
}

interface PokemonSpritesOther {
	home: {
		front_default: SpriteUrl;
		front_female: SpriteUrl;
		front_shiny: SpriteUrl;
		front_shiny_female: SpriteUrl;
	};
	showdown: PokemonSpriteSet;
	dream_world: {
		front_default: SpriteUrl;
		front_female: SpriteUrl;
	};
	'official-artwork': {
		front_default: SpriteUrl;
		front_shiny: SpriteUrl;
	};
}

interface PokemonSpritesVersions {
	'generation-i': {
		yellow: PokemonGenerationISpriteSet;
		'red-blue': PokemonGenerationISpriteSet;
	};
	'generation-ii': {
		gold: PokemonGenerationIISpriteSet;
		silver: PokemonGenerationIISpriteSet;
		crystal: PokemonGenerationIICrystalSpriteSet;
	};
	'generation-iii': {
		emerald: PokemonGenerationIIISpriteSet;
		'ruby-sapphire': PokemonGenerationIIIBattleSpriteSet;
		'firered-leafgreen': PokemonGenerationIIIBattleSpriteSet;
	};
	'generation-iv': {
		platinum: PokemonGenerationIVSpriteSet;
		'diamond-pearl': PokemonGenerationIVSpriteSet;
		'heartgold-soulsilver': PokemonGenerationIVSpriteSet;
	};
	'generation-v': {
		icons?: {
			animated: {
				front_default: SpriteUrl;
			};
			front_default: SpriteUrl;
		};
		'black-white': PokemonGenerationVAnimatedSpriteSet;
	};
	'generation-vi': {
		'x-y': PokemonGenerationVISpriteSet;
		'omegaruby-alphasapphire': PokemonGenerationVISpriteSet;
	};
	'generation-vii': {
		icons?: PokemonSpriteIcons;
		'ultra-sun-ultra-moon': PokemonGenerationVIISpriteSet;
	};
	'generation-viii': {
		icons?: PokemonSpriteIcons;
		'brilliant-diamond-shining-pearl'?: {
			front_default: SpriteUrl;
			front_female: SpriteUrl;
		};
	};
	'generation-ix'?: {
		'scarlet-violet': {
			front_default: SpriteUrl;
			front_female: SpriteUrl;
		};
	};
}

export interface PokemonSprites extends PokemonSpriteSet {
	other: PokemonSpritesOther;
	versions: PokemonSpritesVersions;
}
