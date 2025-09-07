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
			<ul className='nes-list is-disc list-stats'>
				{props.data.height && (
					<li>
						<span className='left'>Height:</span>
						<span className='spacer'>&nbsp;</span>
						<span className='right'>{props.data.height}in</span>
					</li>
				)}
				{props.data.weight && (
					<li>
						<span className='left'>Weight:</span>
						<span className='spacer'>&nbsp;</span>
						<span className='right'>{props.data.weight}lb</span>
					</li>
				)}
				{props.data.base_experience && (
					<li>
						<span className='left'>Base XP:</span>
						<span className='spacer'>&nbsp;</span>
						<span className='right'>{props.data.base_experience}xp</span>
					</li>
				)}
			</ul>
		</div>
	);
};

export default PokemonStats;
