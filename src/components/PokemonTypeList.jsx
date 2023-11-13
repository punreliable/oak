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

	let minified = types.map( x => 
		<div className="row">
			<a href="#" className="nes-badge" key={uuidv4()}>
				<span className={`type-${x.type.name }`}>{ prettyName( x.type.name ) }</span>
			</a>
		</div>
	)

	let prettyMinified = types.map( x => prettyName(x.type.name) )

	console.log("minified results: " + minified)
	// let min = props.types.map( 
	// 	( props.types ) => { props.types.name } 
	// )
	// console.log( min )
	// console.log(props.types.map('type'))
	// const minimizedList = props.types.map( 'type', type.name );
	// console.log(minimizedList)

	return(
		<>
			{minified}

		</>

	);

};

export default PokemonTypeList;
