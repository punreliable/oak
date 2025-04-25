import prettyName from '../../utilities/prettyName';
import { v4 as uuidv4 } from 'uuid';

const PokemonMoveList = (props: any) => {
  const moves = props.moves;

  const minified = moves.map((x: any) => (
    <div className='col-sm-12 col-md-12 col-lg-12' key={uuidv4()}>
      <a
        href={`/move/${x.move.name}`}
        className={`nes-btn move-${x.move.name} is-${x.move.name}`}
      >
        <span className={`is-${x.move.name}`}>{prettyName(x.move.name)}</span>
      </a>
    </div>
  ));

  return <div className='row'>{minified}</div>;
};

export default PokemonMoveList;
