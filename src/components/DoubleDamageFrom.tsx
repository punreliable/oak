import React from "react"
import prettyName from "../utilities/prettyName"
import type { PokemonType } from "../../pokemon-type.d.ts"

const DoubleDamageFrom = ( props: PokemonType ) => {
	return (
		<div className="damageRelations__doubleDamageFrom">
			<h3>Double Damage From</h3>
			<ul className="list-pokemon-types">
				{ props.data.damage_relations.double_damage_from.map(
					(double_damage_from: any, index: number) => {						
						return (
							<li key={index}>
								<button type="button" className="nes-btn nesBtn isPrimary is-primary btnPokemon">
									{prettyName(double_damage_from.name)}
								</button>
							</li>
						)
					}
				) }
			</ul>
		</div>
	)
}

export default DoubleDamageFrom
