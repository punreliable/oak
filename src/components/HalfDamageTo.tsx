import React from "react"
import prettyName from "../utilities/prettyName"
import type { PokemonType } from "../../pokemon-type.d.ts"

const HalfDamageTo = ( props: PokemonType ) => {
	return (
		<div className="damageRelations__HalfDamageTo">
			<h3>Half Damage To</h3>
			<ul className="list-pokemon-types">
				{ props.data.damage_relations.half_damage_to.map(
					(half_damage_to: any, index: number) => {						
						return (
							<li key={index}>
								<button type="button" className="nes-btn nesBtn isPrimary is-primary btnPokemon">
									{prettyName(half_damage_to.name)}
								</button>
							</li>
						)
					}
				) }
			</ul>
		</div>
	)
}

export default HalfDamageTo
