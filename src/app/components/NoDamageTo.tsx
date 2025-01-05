import React from "react";
import prettyName from "../utilities/prettyName";
import type { PokemonType } from "../../pokemon-type.d.ts";

const NoDamageTo = (props: PokemonType) => {
  return (
    <div className="damageRelations__noDamageTo">
      <h3>No Damage To</h3>
      <ul className="list-pokemon-types">
        {props.data.damage_relations.no_damage_to.map(
          (no_damage_to: any, index: number) => {
            return (
              <li key={index}>
                <button
                  type="button"
                  className="nes-btn nesBtn isPrimary is-primary btnPokemon"
                >
                  {prettyName(no_damage_to.name)}
                </button>
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
};

export default NoDamageTo;
