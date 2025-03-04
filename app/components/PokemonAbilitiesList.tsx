'use client';
import prettyName from '../../utilities/prettyName';
import { v4 as uuidv4 } from 'uuid';

const PokemonAbilitiesList = (props: any) => {
  const abilities = props.abilities;

  const minified = abilities.map((x: any) => (
    <div className='col-sm-12 col-md-6 col-lg-3' key={uuidv4()}>
      <a
        href={`/ability/${x.ability?.name}`}
        className={`nes-btn ability-${x.ability?.name} is-${x.ability?.name}`}
      >
        <span className={`is-${x.ability?.name}`}>{prettyName(x.ability.name)}</span>
      </a>
    </div>
  ));

  return <div className='row'>{minified}</div>;
};

export default PokemonAbilitiesList;
