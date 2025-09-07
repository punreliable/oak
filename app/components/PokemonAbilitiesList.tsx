import prettyName from '../../utilities/prettyName';
import { v4 as uuidv4 } from 'uuid';

const PokemonAbilitiesList = (props: any) => {
	const abilities = props.abilities;
	const count = props.abilities.length;
	let columns = `px-4 my-2`;
	if (count > 2) {
		columns = columns + ` col-md-4`;
	}
	if (count > 1 && count < 3) {
		columns = columns + ` col-md-6`;
	}
	if (count > 2) {
		columns = columns + ` col-md-12`;
	}

	const minified = abilities.map((x: any) => (
		<div className={columns} style={{ display: 'inline' }} key={uuidv4()}>
			<a href={`/ability/${x.ability?.name}`} className={`nes-btn is-warning`}>
				{prettyName(x.ability?.name)}
			</a>
		</div>
	));
	return (
		<>
			<div className='row my-4'>
				<h3 className='h3-responsive gameboy'>Abilities</h3>
			</div>

			<div className='row my-4'>{minified}</div>
		</>
	);
};

export default PokemonAbilitiesList;
