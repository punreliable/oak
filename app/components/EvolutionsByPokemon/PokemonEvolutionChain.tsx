import react from 'react';
import Link from 'next/link';


const PokemonEvolutionChain = ({ id }: { id: number }) => {

return(
<div className='col-md-12'>
					<h3 className='my-4'>Evolution</h3>
					<p>Evolves from: <Link href={`/pokemon/${evolvesFrom}`}>{evolvesFrom}</Link>
					</p>
					{data?.data.baby_trigger_item && (
						<p>
							Baby Trigger Item:{' '}
							{data?.data.baby_trigger_item ? data.data.baby_trigger_item : 'None.'}
						</p>
					)}
				</div>
);

}

export default PokemonEvolutionChain;