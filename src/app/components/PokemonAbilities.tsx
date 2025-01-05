import react from 'React'

const PokemonAbilities = (props) => {
	return(
		<div className="pokemonAbilities">
			<h2 className="sectionHeadline">Abilities</h2>
			<div className="wrapperAbilities">
				{props.abilities.map((props.ability, index) => {
					return (
						<div key={index} className="ability">
							{props.ability.ability.name}
						</div>
					);
				})}
			</div>
		</div>
);
};

export default PokemonAbilities;