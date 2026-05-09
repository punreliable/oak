'use client';
import prettyName from '../../utilities/prettyName';
import { v4 as uuidv4 } from 'uuid';
import type { MoveList } from '@/types/move-list';

const PokemonMoveList = (props: MoveList) => {
	const moves = props.moves;
	const fromPage = props.from;
	const minified = moves.map((x: any) => {
		if (x.version_group_details[0].move_learn_method.name !== 'level-up') {
			return (
				<div className='col-md-3 px-2 py-4' style={{ display: 'inline' }} key={uuidv4()}>
					<a
						href={`/move/${x.move.name}?from=${fromPage}`}
						className={`nes-btn is-error my-1`}
					>
						{prettyName(x.move.name)}
					</a>
				</div>
			);
		}
	});
	return <>{minified}</>;
};

export default PokemonMoveList;
