import MainNavigation from './MainNavigation'
import './PagePokemonTypeDark.scss'

const PagePokemonTypeDark = () => {
	return(
		<div className="container">
			<MainNavigation />
			<div className="type-icon dark"></div>
			<h1>Dark Type</h1>
			<p>More details coming soon!</p>

		</div>
	);
};

export default PagePokemonTypeDark;
