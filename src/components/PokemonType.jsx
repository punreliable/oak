import { useState } from "React";
import prettyName from "../utilities/prettyName";
import "./PokemonType.scss";
import { v4 as uuidv4 } from 'uuid';


const getID = () => {
	return uuidv4()
};

const PokemonType = (props) => {
	
	return(
		<div className="row">
			<a href="#" className="nesBadge" key={getID}>
			  <span className="isDark">{prettyName(props.types[0].type.name)}</span>
			</a>
		</div>
	);
	
};

export default PokemonType;
