import Link from 'next/link';

const Footer = () => {
	const currentYear: string = new Date().getFullYear().toString();

	const social: { facebook: string; github: string; instagram: string } = {
		facebook: 'https://facebook.com/punreliable',
		github: 'https://github.com/punreliable',
		instagram: 'https://instagram.com/punreliable',
	};

	return (
		<footer className='page-footer fixed-bottom gameboy text-center'>
			<div className='row mb-3'>
				<div className='col-md-12 footer-text'>
					<ul className='list-unstyled d-flex justify-content-center mb-0 py-4'>
						<li>
							<Link href={social.facebook} target='_blank' className='icons-sm fb-ic'>
								<i className='fab fa-facebook-f white-text fa-lg'> </i>
							</Link>
						</li>
						<li>
							<Link
								href={social.github}
								target='_blank'
								className='icons-sm github-ic'
							>
								<i className='fab fa-github white-text fa-lg'> </i>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='row mb-3'>
				<div className='col-md-12 footer-text'>
					<p>Created for educational purposes by Punreliable.</p>
				</div>
				<div className='col-md-12 footer-text'>
					&copy;&nbsp;{currentYear}&nbsp;
					<Link href='http://punreliable.com' target='_blank'>
						Punreliable.com
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
