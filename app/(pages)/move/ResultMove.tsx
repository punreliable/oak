import React from 'react';
import prettyName from '../../../utilities/prettyName';
import { dashRemover } from '../../../utilities/dashRemover';

const ResultMove = (props: any) => {
  return (
    <div className='App'>
      <h1 className='pokemonName'>{prettyName(props?.move.name)}</h1>
      <div className='row rowStats'>
        <div className='col-md-12 col-lg-12 stats'>
          {props.move.flavor_text_entries && (
            <h2 className='my-4'>{props.move.flavor_text_entries[0].flavor_text}</h2>
          )}
          {props.move.effect_entries && (
            <h3 className='my-4'>{props.move.effect_entries[0].effect}</h3>
          )}
          {props.move.power && <p>Power: {props.move.power}</p>}
          {props.move.pp && <p>PP: {props.move.pp}</p>}
          {props.move.accuracy && <p>Accuracy: {props.move.accuracy}</p>}
          {props.move.effect_chance && <p>Effect Chance: {props.move.effect_chance}&#37;</p>}
          {props.move.damage_class && (
            <p>Damage Class: {prettyName(props.move.damage_class.name)}</p>
          )}
          {props.move.type && <p>Type: {prettyName(props.move.type.name)}</p>}
          {props.move.generation && (
            <p>Generation: {dashRemover(prettyName(props.move.generation.name))}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultMove;
