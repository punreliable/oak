import Image from 'next/image';
import professorOak from '@/assets/oak.svg';
const Message = (props: { pokemon: string }) => {
	return (
		<section
			className='message-list messageList'
			id='professorMessages'
			// unresolved
		>
			<section className='message -right'>
				<div className='nes-balloon from-right'>
					<p>
						Entry #{props.pokemon} in <br />
						Kanto Pokedex!
					</p>
				</div>
				<div className='wrapperOak'>
					<Image
						src={professorOak}
						id='imgProfessorOak'
						alt='Professor Oak'
						height={64}
						width={64}
					/>
				</div>
			</section>
		</section>
	);
};
export default Message;
