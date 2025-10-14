'use client';
import { v4 as uuidv4 } from 'uuid';
import { usePLAE } from '@/app/queries/usePLAE';
import transformWords from '@/utilities/transformWords';
import PendingPokeball from '@/app/components/PendingPokeball';
import type { PokemonLocationAreaEncounter } from '@/types/pokemon-location-area-encounters';
import Link from 'next/link';
import { getURLtoPath } from '@/utilities/getURLtoPath';

const PokemonLocationAreaEncounters = (params: { locations: string }) => {
	const { data, isLoading } = usePLAE(params.locations);
	const locationList = locationsHandler();

	{
		isLoading && <PendingPokeball />;
	}

	return (
		<div className='row' style={{ display: 'inline' }}>
			<h3 className='responsive-h3'>Location Encounters</h3>
			<ul>{locationList}</ul>
		</div>
	);

	function locationsHandler() {
		const validVersions = ['yellow', 'red', 'blue'];
		return data?.data
			.filter((location: any) =>
				location.version_details.some((versionDetail: any) =>
					validVersions.includes(versionDetail.version.name),
				),
			)
			.map((location: PokemonLocationAreaEncounter) => {
				return (
					<li key={uuidv4()}>
						<Link href={getURLtoPath(location.location_area.url)}>
							{transformWords(location.location_area.name)}
						</Link>
						<ul>
							{location.version_details
								.filter((versionDetail) =>
									validVersions.includes(versionDetail.version.name),
								)
								.map((versionDetail, index) => (
									<li key={index}>
										Version: {transformWords(versionDetail.version.name)} - Max
										Chance: {versionDetail.max_chance}%
									</li>
								))}
						</ul>
					</li>
				);
			});
	}
};

export default PokemonLocationAreaEncounters;
