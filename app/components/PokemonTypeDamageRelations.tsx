import DoubleDamageFrom from '@/app/components/DamageRelations/DoubleDamageFrom';
// import DoubleDamageTo from '@/app/components/DamageRelations/DoubleDamageTo';

const PokemonTypeDamageRelations = ( props: any
	// props: {
	// 	damage_relations: { 
	// 		double_damage_from: [{name: string; url: string;}], 
	// 		double_damage_to: [{name: string; url: string;}]
	// 	},
	// }
) => {

	console.log('Props: ', props);
	const doubleDamageFrom: any = props.damageRelations?.double_damage_from;

	const name = props.damageRelations.double_damage_from[0].name;
	let listOfDoubleDamageFrom = doubleDamageFrom.map(
		buildList(doubleDamageFrom)
	);

	function buildList(x: any) {
		return <a href={`/type/${x.name}`}>${x.name}</a>;
	}
		
	return(
		<div className="row">
			{doubleDamageFrom && <div className="col-lg-4 col-md-12">{ doubleDamageFrom.damageRelations && listOfDoubleDamageFrom }</div>}
		</div>
	);
}

export default PokemonTypeDamageRelations;
