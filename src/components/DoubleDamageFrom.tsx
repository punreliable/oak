import React from "react"
import type { PokemonType } from "../../pokemon-type.d.ts"
import prettyName from "../utilities/prettyName"


const DoubleDamageFrom = ( props: PokemonType ) => {

	return (
		
		<div className="nesContainer damageRelations__doubleDamageFrom">
			
			<h3 className="nes-text is-error">Double Damage From</h3>
			
			<ul className="list-pokemon-types">

				{

					props.data.map(
						(double_damage_from: any, index: number) => {						
							return (
								<li key={index}>
									<button type="button" className="nes-btn nesBtn isError is-error btnPokemon">
										{prettyName(double_damage_from.name)}
									</button>
								</li>
							)
						}
					)
						
				}
				

			</ul>

		</div>

	)
}

export default DoubleDamageFrom
