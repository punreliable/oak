import prettyName from '../../utilities/prettyName';
import { v4 as uuidv4 } from 'uuid';
import './PokemonTypeList.scss';
import type { PokemonTypeFromAPI } from '@/types/pokemon-type'; 

const PokemonTypeList = (props: PokemonTypeFromAPI) => {
  const types = props.types;
  const count: number = props.types.length;

  const columns = count > 1 ? 'col-md-6 col-sm-12': 'col-sm-12';
  const minified = types.map((x: any) => (
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
