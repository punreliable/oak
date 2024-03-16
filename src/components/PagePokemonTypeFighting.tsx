import React from 'react';
import MainNavigation from './MainNavigation'
import './PagePokemonTypeFighting.scss'

const PagePokemonTypeFighting = () => {
	return(
		<div className="container">
			<MainNavigation />
			<div className="type-icon fighting"></div>
			<h1>Fighting Type</h1>
			<p>More details coming soon!</p>
		</div>
	);
};

export default PagePokemonTypeFighting
