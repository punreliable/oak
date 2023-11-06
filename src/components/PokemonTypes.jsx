import "./PokemonTypes.scss";

import { useState } from "React";

import prettyName from "../utilities/prettyName";

const PokemonTypes = (props) => {
  	const [pokemon, setPokemon] = useState( null );
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
