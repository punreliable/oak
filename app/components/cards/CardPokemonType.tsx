import Link from 'next/link';

const CardPokemonType = (props: { type: { name: string; link: string; container: string } }) => {
  return (
    <div className={`card is-dark member-card type-${props.type.container}-container clickable`}>
      <div className='card-body' style={{ position: 'relative' }}>
        <div className='avatar gameboy'></div>
      </div>
      <Link href={props.type.link} className='nes-btn gameboy'>
        {props.type.name}
      </Link>
    </div>
  );
};

export default CardPokemonType;
