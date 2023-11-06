import { useState } from "React";
import prettyName from "../utilities/prettyName";
import styled from "styled-components";
import PokemonType from "./PokemonType";
import "./PokemonType.scss";

const PokemonTypeList = () => {
	
	const getCountOfTypes = props => {

		return props.length

	}
	
	const passTypeData = props => {
		
		if( getCountOfTypes(props) > 1 ) {
			
			return "There are two types";
			
		}
		
	}

	return(
		// console.log(props);
		<StyledPokemonTypeList>
			<h1>Hello World</h1>
			<p>{passTypeData}</p>
		</StyledPokemonTypeList>
		
	);

	const StyledPokemonTypeList = styled.div`
	display: flex block;
	width: 100%;
	padding-bottom: 1rem;
	padding-top: 1rem;
	`;
	
};

export default PokemonTypeList;