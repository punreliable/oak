import transformWords from '@/utilities/transformWords';
import ButtonHome from '@/app/components/Buttons/ButtonHome';
import { Suspense } from 'react';
import PendingLocation from '@/app/components/Locations/PendingLocation';
import type { Location } from '@/types/location';
import generationName from '@/utilities/generationName';
import { v4 as uuidv4 } from 'uuid';

export interface LocationListResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Location[];
	status: number;
}

export const revalidate = 60;

export async function generateStaticParams() {
	const locationList: LocationListResponse = await fetch(
		`https://pokeapi.co/api/v2/location/`,
	).then((res) => res.json());
	return locationList.results.map((result) => ({
		name: String(result.name),
	}));
}

export default async function Page({ params }: { params: any }) {
	const { name } = await params;
	const post: Location = await fetch(`https://pokeapi.co/api/v2/location/${name}`).then((res) =>
		res.json(),
	);

	const areas = post.areas;
	const areaList = areas.map((area) => {
		return <li key={uuidv4()}>{transformWords(area.name)}</li>;
	});

	const gameIndices = post.game_indices;
	const gameList = gameIndices.map((game) => {
		return <li key={uuidv4()}>{generationName(game.generation.name)}</li>;
	});

	return (
		<Suspense fallback={<PendingLocation />}>
			<section className='App nes-container container'>
				<div className='row' style={{ display: 'block', width: '100%' }}>
					<h1
						className='responsive-h1 text-center gameboy mb-4'
						style={{ display: 'block', minWidth: '100%' }}
					>
						Location
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
				<div className='row'>
					{areaList && (
						<div className='col-md-9'>
							<h3 className='responsive-h3 my-4'>Areas</h3>
							<ul className='list-location-areas'>{areaList}</ul>
						</div>
					)}
					<div className='col-md-3'>
						{post.region.name && post.game_indices && (
							<>
								<h3 className='responsive-h3 my-4'>Region</h3>
								<p>{transformWords(post.region.name)}</p>
								<h3>Games</h3>
								<ul>{gameList}</ul>
							</>
						)}
					</div>
				</div>
				<div className='row my-4' style={{ display: 'block', width: '100%' }}>
					<div className='row'>
						<div className='col-md-12'>
							<p className='responsive-h3 my-4'>More Details Coming Soon</p>
						</div>
					</div>
					<div className='row'>
						<ButtonHome />
					</div>
				</div>
			</section>
		</Suspense>
	);
}
