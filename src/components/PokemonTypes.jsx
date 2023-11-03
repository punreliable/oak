import "./PokemonTypes.scss";

import prettyName from "../utilities/prettyName";

const PokemonTypes = (props) => {
	
	console.log(props)
	
	let typeList = [];
	
	if(props.types[1]) {
		
		console.log('Second Type detected');
		
		let hasTwoTypes = true;
		
	} else {
	
		let hasTwoTypes = false;
		console.log('Single Type Found');
	}
	
	
	// const personSalary = {
	//   engineer: 1500,
	//   programmer: 2500,
	//   lawyer: 2000,
	// }
	const keys = Object.keys(props)
	console.log(keys) // [engineer, programmer, lawyer]

	console.log("Length: "+ props.length );
// 
// 	const printTypes = (props) => {
// 		<div className="row">
// 			<a href="#" className="nes-badge">
// 			  <span className="is-dark">{prettyName(props.types[0].type.name)}</span>
// 			</a>
// 		
// 		</div>
// 		<div className="row">
// 			<a href="#" className="nes-badge">
// 			  <span className="is-dark">{prettyName(props.types[1].type.name)}</span>
// 			</a>
// 		</div>
// 	};
// 	for(let i = 0; i > 2; i++) {
// 		if(hasTwoTypes) {
// 			
// 			printTypes(props);
// 			
// 		}
// 	}
	// const map = props => {
	// 	
	// 	props.map((typeList) => x * 2);
	// 	
	// }
	

	
	//let isPropsAnArray = isArray(props);
	// 
	// let isPropsAnObject = isObject(props);
	
	
	// 
	// if( isPropsAnArray == true )  {
	// 	
	// 	console.log('Props is an object')
	// 	
	// } else {
	// 	console.log('Props is NOT an object')
	// }
	// 
	// 
	// if( isPropsAnArray == true )  {
	// 	
	// 	console.log('Props is an array');
	// 	for( let i = 0; i < 2; i++) { 
	// 		
	// 		typeCount = typeCount + 1
	// 		
	// 	}
	//  			
 	// } else {
	// 	
	// 	console.log('Props is not an array');
	// 	 
	//  }
	//
	// 
	// 
	// 
	// console.log("Type Count: " + typeCount.toString() )
	
	
	//let types = []

	const newProps = props.forEach((element) => element.x)
	console.log(newProps)

	
	console.log(prettyName(props.types[0].type.name))
	
	// const type = props => props.map(
	// 	
	// 	types.push(props.type.name)
	// )
 
	return(
		<>
			{ props && (
			
			<div className="row">
				<a href="#" className="nes-badge">
	  			<span className="is-dark">{prettyName(props.types[0].type.name)}</span>
				</a>
			
			</div>
			
			)}

		</>
		
	);
	
};

export default PokemonTypes;