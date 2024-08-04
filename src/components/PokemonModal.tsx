import React from "react"
import { Pokemon } from "../types"

export function PokemonModal(pokemonData:Pokemon) {

return (
	<section>
	  <dialog className="nes-dialog" id="dialog-default">
		<form method="dialog">
		{
		pokemonData.name && (<p className="title">pokemonData.name</p>
		)}
		  <p>Alert: this is a dialog.</p>




  <button type="button" className="nes-btn is-primary" >
    Open dialog
  </button>


				<p className="title">Dialog</p>
				<p>Alert: this is a dialog.</p>
				<menu className="dialog-menu">
					<button className="nes-btn">Learn More</button>
					<button className="nes-btn is-primary">Close</button>
				</menu>
			</form>
		</dialog>
	
	</section>
)



}