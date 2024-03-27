import React from "react"
import prettyName from "../utilities/prettyName"
import type { PokemonType } from "../../pokemon-type.d.ts"

const NoDamageFrom = ( props: PokemonType ) => {
	return (
		<div className="damageRelations__noDamageFrom">
			<h3>No Damage From</h3>
			<ul className="list-pokemon-types">
				{ props.data.damage_relations.no_damage_from.map(
					(no_damage_from: any, index: number) => {						
						return (
							<li key={index}>
								<button type="button" className="nes-btn nesBtn isPrimary is-primary btnPokemon">
									{prettyName(no_damage_from.name)}
								</button>
							</li>
						)
					}
				) }
			</ul>
		</div>
	)
}

export default NoDamageFrom
