import Link from 'next/link';

const CardPokemonType = (props: { type: { name: string; link: string; container: string; } } ) => {

	return(

		<div className={`card is-dark member-card ${props.type.container} clickable`}>
			<div className="card-body" style={{'position':'relative'}}>
				<div className="avatar gameboy"></div>
			</div>
			<Link href={props.type.link} className="nes-btn is-primary gameboy white-text">{props.type.name}</Link>
		</div>

	);
}

export default CardPokemonType;
