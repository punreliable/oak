'use client';
import transformWords from '@/utilities/transformWords';
import type { PokemonBaseStat, PokemonBaseStats } from '@/types/pokemon-base-stats';

const PokemonBaseStatsList = (props: PokemonBaseStats) => {
	const output = props.stats.map((listedStat: PokemonBaseStat) => {
		return (
			<li key={listedStat.stat.name}>
				{transformWords(listedStat.stat.name)}: {listedStat.base_stat}
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
