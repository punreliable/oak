import transformWords from '@/utilities/transformWords';
import { AbilityDetail } from '@/types/ability';

export interface Result {
	name: string;
	url: string;
}
export interface AbilityListResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Result[];
}

export const revalidate = 60;

export async function generateStaticParams() {
	const abilityList: AbilityListResponse = await fetch(`https://pokeapi.co/api/v2/ability/`).then(
		(res) => res.json(),
	);
	return abilityList.results.map((result) => ({
		name: String(result.name),
	}));
}

export default async function Page({ params }: { params: any }) {
	const { name } = await params;
	const post: AbilityDetail = await fetch(`https://pokeapi.co/api/v2/ability/${name}`).then(
		(res) => res.json(),
	);

	const description = post.flavor_text_entries.map((flavor) => {
		if (flavor.language.name == 'en' && flavor.version_group.name == 'scarlet-violet') {
			return flavor.flavor_text;
		}
	});

	return (
		<section className='App nes-container container'>
			<div className='row' style={{ display: 'block', width: '100%' }}>
				<h1
					className='responsive-h1 text-center gameboy mb-4'
					style={{ display: 'block', minWidth: '100%' }}
				>
					Ability
				</h1>
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
			{post.flavor_text_entries && description && (
				<div className='row' style={{ display: 'block', width: '100%' }}>
					<div className='col-md-12'>
						<h3 className='responsive-h3 darkest-green my-4'>Description</h3>
						<p className='my-4'>{description}</p>
					</div>
				</div>
			)}
			<div className='row my-4' style={{ display: 'block', width: '100%' }}>
				<div className='row'>
					<div className='col-md-12'>
						<p className='responsive-h3 darkest-green my-4'>More Details Coming Soon</p>
					</div>
				</div>
				<div className='col-md-12 my-4'>
					<a href={`/`} className={`nes-btn is-warning`}>
						Home
					</a>
				</div>
			</div>
		</section>
	);
}
