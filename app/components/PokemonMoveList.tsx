import prettyName from '../../utilities/prettyName';
import { v4 as uuidv4 } from 'uuid';

const PokemonMoveList = (props: any) => {
  const moves = props.moves;
  const count: number = props.moves.length;
  const columns = count > 1 ? 'col-md-6 col-sm-12' : 'col-sm-12';
  const minified = moves.map((x: any) => (
    <div className={columns + ' mx-auto py-4'} key={uuidv4()}>
      <a href={`/move/${x.move.name}`} className={`nes-btn is-error my-1`}>
        <span>{prettyName(x.move.name)}</span>
      </a>
    </div>
  ));

  return <div className='row'>{minified}</div>;
};

export default PokemonMoveList;
