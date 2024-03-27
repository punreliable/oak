import React from "react"
import prettyName from "../utilities/prettyName"
import type { PokemonType } from "../../pokemon-type.d.ts"

const HalfDamageFrom = ( props: PokemonType ) => {
	return (
		<div className="damageRelations__halfDamageFrom">
			<h3>Half Damage From</h3>
			<ul className="list-pokemon-types">
				{ props.data.damage_relations.half_damage_from.map(
					(half_damage_from: any, index: number) => {						
						return (
							<li key={index}>
								<button type="button" className="nes-btn nesBtn isPrimary is-primary btnPokemon">
									{prettyName(half_damage_from.name)}
								</button>
							</li>
						)
					}
				) }
			</ul>
		</div>
	)
}

export default HalfDamageFrom
