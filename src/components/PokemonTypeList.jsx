import { useState } from "React";
import prettyName from "../utilities/prettyName";
import styled from "styled-components";
import PokemonType from "./PokemonType";
import "./PokemonTypeList.scss";

const PokemonTypeList = (props) => {
	
	const getCountOfTypes = props => {

		return props.length

	}
	
	const passTypeData = props => {
		
		if( getCountOfTypes(props) > 1 ) {
			
			return "There are two types";
			
		}
		
	}

	return(
		<StyledPokemonTypeList>
			<PokemonType type={props} />
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
