'use client';
import Counter from '@/app/components/Counter';

export default function Page() {
	return (
		<section className='App nes-container container'>
			<div className='row' style={{ display: 'block', width: '100%' }}>
				<h1
					className='responsive-h1 text-center gameboy mb-4'
					style={{ display: 'block', minWidth: '100%' }}
				>
					Redux Counter
				</h1>
			</div>
			<Counter />
		</section>
	);
}
