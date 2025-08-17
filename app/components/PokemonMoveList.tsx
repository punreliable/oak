import prettyName from '../../utilities/prettyName';
import { v4 as uuidv4 } from 'uuid';

const PokemonMoveList = (props: any) => {
  const moves = props.moves;
  const minified = moves.map((x: any) => (
    <div className='col-md-3 px-2 py-4' style={{ display: 'inline' }} key={uuidv4()}>
      <a href={`/move/${x.move.name}`} className={`nes-btn is-error my-1`}>
        {prettyName(x.move.name)}
      </a>
    </div>
  ));
  return <>{minified}</>;
};

export default PokemonMoveList;
