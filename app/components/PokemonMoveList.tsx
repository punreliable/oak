import prettyName from '../../utilities/prettyName';
import { v4 as uuidv4 } from 'uuid';

export type Move = {
  name: string;
  url: string;
};

export type VersionGroup = {
  name: string;
  url: string;
};

export type VersionGroupDetails = {
  level_learned_at: number;
  move_learn_method: object;
  order: number | null;
  version_group: VersionGroup;
};

export type MoveList = {
  move: Move[];
  version_group_details: VersionGroupDetails[];
};

export type Properties = {
  moves: MoveList[];
  from: string;
};

const PokemonMoveList = (props: Properties) => {
  const moves = props.moves;
  const fromPage = props.from;
  console.log('Props: ', props);
  console.log('Moves: ', moves);
  console.log('From Page: ', props.from);
  const minified = moves.map((x: any) => (
    <div className='col-md-3 px-2 py-4' style={{ display: 'inline' }} key={uuidv4()}>
      <a href={`/move/${x.move.name}?from=${fromPage}`} className={`nes-btn is-error my-1`}>
        {prettyName(x.move.name)}
      </a>
    </div>
  ));
  return <>{minified}</>;
};

export default PokemonMoveList;
