'use client';
import transformWords from '@/utilities/transformWords';
import { v4 as uuidv4 } from 'uuid';
import type { MoveList } from '@/types/move-list';

const PokemonMoveList = (props: MoveList) => {
	interface versionGroupDetails {
		version_group_details: [
			{
				level_learned_at: number;
				move_learn_method: {
					name: string;
					url: string;
				};
			},
		];
	}

	function detectMoveLearnMethod(data: versionGroupDetails) {
		if (data.version_group_details[0].move_learn_method.name == 'level-up') {
			return (
				<td className='hide-on-small'>
					<span className='hide-on-small'>Level: </span>
					<span className='hide-on-large'>lvl </span>
					{data.version_group_details[0].level_learned_at}
				</td>
			);
		} else {
			return <td className='hide-on-small'>N/A</td>;
		}
	}

	const moves = props.moves;
	const fromPage = props.from;

	const minified = moves.map((x: any) => (
		<tr key={uuidv4()}>
			<td>
				<a
					href={`/move/${x.move.name}?from=${fromPage}`}
					className={`nes-btn is-error my-1`}
				>
					{transformWords(x.move.name)}
				</a>
			</td>
			<td className='hide-on-small'>
				{transformWords(x.version_group_details[0].move_learn_method.name)}
			</td>
			{detectMoveLearnMethod(x)}
		</tr>
	));
	return (
		<div className='nes-table-responsive'>
			<table className='nes-table is-bordered is-centered is-dark'>
				<thead>
					<tr>
						<th>Move Name</th>
						<th className='hide-on-small'>Learned Method</th>
						<th className='hide-on-small'>
							<span className='hide-on-small'>Level </span>Learned
						</th>
					</tr>
				</thead>
				<tbody>{minified}</tbody>
			</table>
		</div>
	);
};

export default PokemonMoveList;
