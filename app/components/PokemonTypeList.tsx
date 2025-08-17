import prettyName from '../../utilities/prettyName';
import { v4 as uuidv4 } from 'uuid';

const PokemonTypeList = (props: any) => {
  const types = props.types;
  const count: number = props.types.length;

  const columns = count > 1 ? 'col-md-6 col-sm-12' : 'col-md-12 col-sm-12';
  const minified = types.map((x: any) => (
    <div className={columns + ' py-4'} style={{'display':'inline'}} key={uuidv4()}>
      <a href={`/type/${x.type.name}`} className={`nes-btn type-${x.type.name} is-${x.type.name}`}>
        <span className={`is-${x.type.name}`}>{prettyName(x.type.name)}</span>
      </a>
    </div>
  ));

  return <>{minified}</>;
};

export default PokemonTypeList;
