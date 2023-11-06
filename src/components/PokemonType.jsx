import { useState } from "React";
import prettyName from "../utilities/prettyName";
import "./PokemonType.scss";

const PokemonType = (props) => {
	
	return(
		
		<>
		<div className="row">
			<a href="#" className="nesBadge" key={}>
			  <span className="isDark">{prettyName(props.types[0].type.name)}</span>
			</a>
		
		</div>
		<h1>Hello World</h1>
		</>
		
	);
	
};

export default PokemonType;
