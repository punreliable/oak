import prettyName from '../../utilities/prettyName';
import { v4 as uuidv4 } from 'uuid';

const PokemonMoveList = (props: any) => {
  const moves = props.moves;

  const minified = moves.map((x: any) => (
    <div className='col-sm-6 col-md-4 col-lg-3' key={uuidv4()}>
      <a
        href={`/move/${x.move.name}`}
        className={`nes-btn move-${x.move.name} is-${x.move.name} my-1`}
      >
        <span className={`is-${x.move.name}`}>{prettyName(x.move.name)}</span>
      </a>
    </div>
  ));

  return <div className='row'>{minified}</div>;
};

export default PokemonMoveList;
