import { useState } from "react";
import styled from "styled-components";
// import PokemonType from "./PokemonType";
// import OnePokemonType from "./OnePokemonType";
// import TwoPokemonTypes from "./TwoPokemonTypes";
import { v4 as uuidv4 } from 'uuid';

const PokemonTypeList = (props) => {
	
	const pokemonTypeCounter = (props) => {
		
		return props.types.length > 1 ? 2 : 1;
		
	}
	
	return(

		<div className="row">
			<a href="#" className="nes-badge" key={uuidv4()}>
				<span className="is-dark">Dark</span>
			</a>
		</div>

	);

};

export default PokemonTypeList;
