import './PagePokemonTypeBug.scss'
import './MainNavigation'
import MainNavigation from './MainNavigation';

const PagePokemonTypeBug = () => {
	return(
	<div className="container">
		<MainNavigation />
		<div className="type-icon bug"></div>
		<h1>Bug Type</h1>
		<p>More details coming soon!</p>
	</div>
	);
};

export default PagePokemonTypeBug;
