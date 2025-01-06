import React from "react";
import type { PokemonType } from "../../pokemon-type.d.ts";
import prettyName from "../utilities/prettyName";

const HalfDamageTo = (props: PokemonType) => {
  return (
    <div className="nesContainer damageRelations__halfDamageTo">
      <h3 className="nes-text is-success">Half Damage To</h3>

      <ul className="list-pokemon-types">
        {props.data.map((double_damage_to: any, index: number) => {
          return (
            <li key={index}>
              <button
                type="button"
                className="nes-btn nesBtn isSuccess is-success btnPokemon"
              >
                {prettyName(double_damage_to.name)}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HalfDamageTo;
