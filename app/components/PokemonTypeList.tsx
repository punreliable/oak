import { useState } from 'react';
import styled from 'styled-components';
import prettyName from '../../utilities/prettyName';
import { v4 as uuidv4 } from 'uuid';
import './PokemonTypeList.scss';

const PokemonTypeList = (props: any) => {
  let types = props.types;
  let count: number = props.types.length;

  let fullColumn = 'col-sm-12';
  let halfColumn = 'col-md-6 col-sm-12';

  let columns = count > 1 ? halfColumn : fullColumn;
  let minified = types.map((x: any) => (
    <div className={columns} key={uuidv4()}>
      <a
        href={`/pokemon/type/${x.type.name}`}
        className={`nes-btn type-${x.type.name} is-${x.type.name}`}
      >
        <span className={`is-${x.type.name}`}>{prettyName(x.type.name)}</span>
      </a>
    </div>
  ));

  return <div className='row'>{minified}</div>;
};

export default PokemonTypeList;
