'use client';
import React from 'react';
import type { Pokemon } from '@/types/pokemon';
import type { PokemonSpecies } from '@/types/pokemon-species';

interface PokemonStatsAsProps {
	data: Pokemon;
	stats: PokemonSpecies;
}

const PokemonStats = (props: PokemonStatsAsProps) => {
	return (
		<div>
			<h4 className='responsive-h4'>Additional Stats</h4>
			{props.data.height && <p>Height: {props.data.height}in</p>}
			{props.data.weight && <p>Weight: {props.data.weight}lb</p>}
			{props.data.base_experience && <p>Base XP: {props.data.base_experience}xp</p>}
		</div>
	);
};

export default PokemonStats;
