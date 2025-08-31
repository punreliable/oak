
const EvolvesFromSpecies = (props: {species: string}) => {
	console.log('I am in the Evolves From Species Component');
	console.log('EvolvesFromSpecies props: ', props.species);
	const species = props.species;
	return(
	<>
		<h2 className="h2-responsive">This Evolves from Another Species.</h2>
		<p>This Evolves from Another Species.</p>
	</>
	);
}

export default EvolvesFromSpecies;
