import { useState } from "react";
import styled from "styled-components";
import PokemonType from "./PokemonType";
import { v4 as uuidv4 } from 'uuid';

const PokemonTypeList = (props) => {
	
	const getTypesCount = props => {
		return props.type.length
	}
	
	// console.log( getTypesCount( props ) )
	
	return(
		
		<div className="row">
			<PokemonType type={props.types} />
		</div>
		
	);

};

export default PokemonTypeList;
