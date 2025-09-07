'use client';
import transformWords from '@/utilities/transformWords';
import type { PokemonBaseStat, PokemonBaseStats } from '@/types/pokemon-base-stats';

const PokemonBaseStatsList = (stats: PokemonBaseStats) => {
	const output = stats.stats.map((stat: PokemonBaseStat) => {
		return (
			<li key={stat.stat.name}>
				<span className='left'>{transformWords(stat.stat.name)}</span>:<span className='spacer'>&nbsp;</span> <span className='right'>{stat.base_stat}</span>
			</li>
		);
	});

	return (
		<div className='lists'>
			<h3 className='responsive-h3'>Base Stats</h3>
			<ul className='nes-list is-disc list-stats'>{output}</ul>
		</div>
	);
};
export default PokemonBaseStatsList;
