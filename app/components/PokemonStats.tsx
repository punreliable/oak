'use client';
import React from 'react';
import prettyName from '@/utilities/prettyName';
import type { Pokemon } from '@/types/pokemon';
import type { PokemonSpecies } from '@/types/pokemon-species';

interface PokemonStatsAsProps {
	data: Pokemon;
	stats: PokemonSpecies;
}

const PokemonStats = (props: PokemonStatsAsProps) => {
	return (
		<div>
			<h3 className='responsive-h3'>Stats</h3>
			{props.data.height && <p>Height: {props.data.height}in</p>}
			{props.data.weight && <p>Weight: {props.data.weight}lb</p>}
			{props.data.base_experience && <p>Base XP: {props.data.base_experience}xp</p>}
			{(props?.stats.base_happiness || props?.stats.base_happiness === 0) && (
				<p>Base Happiness: {props.stats.base_happiness}</p>
			)}
			{props.stats.capture_rate && <p>Capture Rate: {props.stats.capture_rate}</p>}
			{props.stats.color.name && <p>Color: {prettyName(props.stats.color.name)}</p>}
			{props.stats.gender_rate && <p>Gender Rate: {props.stats.gender_rate}</p>}
			{props.stats.hatch_counter && <p>Hatch Counter: {props.stats.hatch_counter}</p>}
		</div>
	);
};

export default PokemonStats;
