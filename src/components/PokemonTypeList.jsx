import { useState } from "react";
import styled from "styled-components";
import prettyName from "../utilities/prettyName";
// import PokemonType from "./PokemonType";
// import OnePokemonType from "./OnePokemonType";
// import TwoPokemonTypes from "./TwoPokemonTypes";
import { v4 as uuidv4 } from 'uuid';

const PokemonTypeList = (props) => {
	
	console.log( props.types )
	
	let types = props.types
	
	console.log( types )
	
	let minified = types.map( 
		x => prettyName(x.type.name)
		
	 )
	console.log("minified results: " + minified)
	// let min = props.types.map( 
	// 	( props.types ) => { props.types.name } 
	// )
	
	// console.log( min )
	
	// console.log(props.types.map('type'))
	
	// const minimizedList = props.types.map( 'type', type.name );
	
	// console.log(minimizedList)
	
	
	const pokemonTypeCounter = (props) => {
		
		return props.types.length > 1 ? 2 : 1;
		
	}
	
	return(

		<div className="row">
			<a href="#" className="nes-badge" key={uuidv4()}>
				<span className="is-dark">{minified}</span>
			</a>
		</div>

	);

};

export default PokemonTypeList;
