import { useState } from "react";
import styled from "styled-components";
import prettyName from "../utilities/prettyName";
import { v4 as uuidv4 } from 'uuid';
import './PokemonTypeList.scss';

const PokemonTypeList = (props) => {

	let types = props.types

	let minified = types.map( x =>
<<<<<<< HEAD
		<div className="col-md-12">
			<button type="button" className={`type-${x.type.name } nes-btn is-${x.type.name }`} key={uuidv4()}>
				{ prettyName( x.type.name ) }
			</button>
=======
		<div className="row">
			<a href="#" className={`nes-btn type-${x.type.name } is-${x.type.name }`} key={uuidv4()}>
				<span className={`is-${x.type.name }`}>{ prettyName( x.type.name ) }</span>
			</a>
>>>>>>> redux
		</div>
	)

	let prettyMinified = types.map( x => prettyName(x.type.name) )

	return(
		<div className="row">
			{minified}
		</div>
	);

};

export default PokemonTypeList;
