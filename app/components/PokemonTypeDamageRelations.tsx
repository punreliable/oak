import DoubleDamageFrom from '@/app/components/DamageRelations/DoubleDamageFrom';
import DoubleDamageTo from '@/app/components/DamageRelations/DoubleDamageTo';

const PokemonTypeDamageRelations = ( damage_relations:  any 
	// double_damage_from: [], 
	// double_damage_to: []
) => {
	return(
		<div className="row">
			<div className="col-lg-4 col-md-4">
				<DoubleDamageFrom double_damage_from={damage_relations.double_damage_from} />
			</div>
			<div className="col-lg-4 col-md-4">
				<DoubleDamageTo double_damage_to={damage_relations.double_damage_to} />
			</div>
		</div>
	);
}

export default PokemonTypeDamageRelations;
