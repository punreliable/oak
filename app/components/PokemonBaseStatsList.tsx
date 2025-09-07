'use client';
import transformWords from '@/utilities/transformWords';
import type { PokemonBaseStat, PokemonBaseStats } from '@/types/pokemon-base-stats';

const PokemonBaseStatsList = (stats: PokemonBaseStats) => {
	const output = stats.stats.map((stat: PokemonBaseStat) => {
		return (
			<li key={stat.stat.name}>
				{transformWords(stat.stat.name)}: {stat.base_stat}
			</li>
		);
	});

	return (
		<div className='lists'>
			<h3 className='responsive-h3'>Base Stats</h3>
			<ul className='nes-list is-disc'>{output}</ul>
		</div>
	);
};
export default PokemonBaseStatsList;
