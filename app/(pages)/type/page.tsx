import Link from 'next/link';

const PokemonTypePage = () => {
	return(
	<>
	<h1>I believe you mean to be at "/types"</h1>
	<h2>Click the link below to be redirected</h2>
	<Link href={'/types'}>Types Page</Link>
	</>
	)
}


export default PokemonTypePage;