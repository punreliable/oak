import prettyName from '../../utilities/prettyName';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

const PokemonTypeList = (props: any) => {
	const types = props.types;
	const count: number = props.types.length;

	const columns = count > 1 ? 'col-md-6 col-sm-12' : 'col-md-12 col-sm-12';
	const minified = types.map((x: any) => (
		<div className={columns + ' py-4'} style={{ display: 'inline' }} key={uuidv4()}>
			<Link href={`/type/${x.type.name}`} className={`nes-btn is-${x.type.name}`}>
				<span className={`is-${x.type.name}`}>{prettyName(x.type.name)}</span>
			</Link>
		</div>
	));

	return (
		<>
			<div className='row'>
				<h3 className='h3-responsive'>Type</h3>
			</div>

			<div className='row my-4'>{minified}</div>
		</>
	);
};

export default PokemonTypeList;
