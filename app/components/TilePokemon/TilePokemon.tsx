'use client'; // Add this if it's a client component
import React from 'react';

export interface SinglePokemonData {
	name: string;
	url: string;
}

export interface TilePokemonProps {
	pokemon: SinglePokemonData;
}

const TilePokemon = () => {
	return (
		<div className='tilePokemon'>
			<h1>Hello World!</h1>
		</div>
	);
};

export default TilePokemon;
