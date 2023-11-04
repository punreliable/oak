import "./PokemonTypes.scss";

import prettyName from "../utilities/prettyName";

const PokemonTypes = (props) => {

	console.log(props)

	let typeList = [];

	return(
		<>
			{ props && (

			<div className="row">
				<a href="#" className="nes-badge">
	  			<span className="is-dark">{prettyName(props.types[0].type.name)}</span>
				</a>

			</div>

			)}

		</>

	);

};

export default PokemonTypes;
