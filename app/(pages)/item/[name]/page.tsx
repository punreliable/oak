import { Item } from '@/types/item';
import ButtonHome from '@/app/components/Buttons/ButtonHome';
import { Suspense } from 'react';
import Loading from '@/app/components/Loading';
import transformWords from '@/utilities/transformWords';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';

export interface Result {
	name: string;
	url: string;
}
export interface ItemListResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Result[];
}

export const revalidate = 60;

export async function generateStaticParams() {
	const itemList: ItemListResponse = await fetch(`https://pokeapi.co/api/v2/item/`).then((res) =>
		res.json(),
	);
	return itemList.results.map((result) => ({
		name: String(result.name),
	}));
}

export default async function Page({ params }: { params: any }) {
	const { name } = await params;
	const post: Item = await fetch(`https://pokeapi.co/api/v2/item/${name}`).then((res) =>
		res.json(),
	);

	const attributes = post.attributes.map((attribute) => {
		return <li key={uuidv4()}>{transformWords(attribute.name)}</li>;
	});

	const sprite = post.sprites.default;

	const description = post.flavor_text_entries.map((entry) => {
		if (
			(entry.language.name == 'en' && entry.version_group.name == 'yellow') ||
			entry.version_group.name == 'red-blue'
		) {
			return entry.text;
		}
	});

	const effects = post.effect_entries.map((effect) => {
		if (effect.language.name == 'en') {
			return effect.effect;
		}
	});

	return (
		<Suspense fallback={<Loading />}>
			<section className='App nes-container container'>
				<div className='row' style={{ display: 'block', width: '100%' }}>
					<h1
						className='responsive-h1 text-center gameboy mb-4'
						style={{ display: 'block', minWidth: '100%' }}
					>
						Item
					</h1>
				</div>
				<div className='row' style={{ display: 'block', width: '100%' }}>
					<div className='col-md-12'>
						{post.sprites.default && (
							<Image src={sprite} alt={post.name + ` Image`} width={64} height={64} />
						)}
					</div>
				</div>
				<div className='row' style={{ display: 'block', width: '100%' }}>
					<div className='col-md-12'>
						{post.flavor_text_entries && (
							<p
								className='responsive-h2 text-center gameboy mb-4-green'
								style={{ display: 'block', width: '100%' }}
							>
								{description}
							</p>
						)}
					</div>
				</div>
				<div className='row' style={{ display: 'block', width: '100%' }}>
					<div className='col-md-12'>
						{post.name && (
							<h2
								className='responsive-h2 text-center gameboy mb-4-green'
								style={{ display: 'block', width: '100%' }}
							>
								{transformWords(post.name)}
							</h2>
						)}
					</div>
				</div>
				<div className='row' style={{ display: 'inline-flex', width: '100%' }}>
					{post.flavor_text_entries && (
						<div className='col-md-8'>
							<h3 className='responsive-h3 darkest-green my-4'>Cost</h3>
							<p>Cost: {post.cost}</p>
						</div>
					)}
				</div>
				<div className='row' style={{ display: 'inline-flex', width: '100%' }}>
					{post.flavor_text_entries && (
						<div className='col-md-8'>
							<h3 className='responsive-h3 darkest-green my-4'>Effects</h3>
							<ul>{effects}</ul>
						</div>
					)}
				</div>
				<div className='row' style={{ display: 'inline-flex', width: '100%' }}>
					{post.flavor_text_entries && (
						<div className='col-md-8'>
							<h3 className='responsive-h3 darkest-green my-4'>Attributes</h3>
							<ul>{attributes}</ul>
						</div>
					)}
				</div>
				<div className='row my-4' style={{ display: 'block', width: '100%' }}>
					<div className='col-md-12'>
						<p className='responsive-h3 darkest-green my-4'>More Details Coming Soon</p>
					</div>
				</div>
				<div className='row'>
					<ButtonHome />
				</div>
			</section>
		</Suspense>
	);
}
