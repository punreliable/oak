import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./PokemonType.scss";

// import OnePokemonType from "./OnePokemonType";
// import TwoPokemonTypes from "./TwoPokemonTypes";

const PokemonType = (props) => {
	
	// console.log( props )
	// console.log( props.type.length )
	
	return(
		<>
			<div className="row">
				<a href="#" className="nes-badge" key={ props.type.name }>
					<span className="is-dark">{ props.type.name }</span>
				</a>
			</div>
		</>
	);
	
};

export default PokemonType;
