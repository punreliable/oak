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

			<div className='nes-table-responsive'>
				<table className='nes-table is-bordered is-centered is-dark'>
					<thead>
						<tr>
							<th>Location Name</th>
							<th className='hide-on-small'>Encounter Chance</th>
						</tr>
					</thead>
					<tbody>{locationList}</tbody>
				</table>
			</div>
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
					<tr key={uuidv4()}>
						<td>
							<Link href={getURLtoPath(location.location_area.url)}>
								{transformWords(location.location_area.name)}
							</Link>
						</td>
						<td className='hide-on-small'>
							<ul>
								{location.version_details
									.filter((versionDetail) =>
										validVersions.includes(versionDetail.version.name),
									)
									.map((versionDetail, index) => (
										<li key={index}>
											Version: {transformWords(versionDetail.version.name)}{' '}
											<br />
											Max Chance: {versionDetail.max_chance}%
										</li>
									))}
							</ul>
						</td>
					</tr>
				);
			});
	}
};

export default PokemonLocationAreaEncounters;
