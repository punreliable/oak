import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import axios from 'axios'
import prettyName from '../../utilities/prettyName'
import PokemonList from './PokemonList'
import MainNavigation from '../MainNavigation'
// import './PageKantoPokemon.scss'

const PageKantoPokemon = () => {

	return(
		<div className="nes-container">
		<MainNavigation />
		<h1>Kanto</h1>
		<PokemonListWrapper>
		<PokemonList />
		</PokemonListWrapper>
		<ContainerButtons>
			<button type="button" className="nes-btn is-primary">Previous</button>
				<span>&nbsp;</span>
			<button type="button" className="nes-btn is-primary">Next</button>
		</ContainerButtons>
		</div>

	)
}


export default PageKantoPokemon

const ContainerButtons = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	align-content: flex-start;
	justify-content: space-between;
	width: 100%;
	min-width: 420px;
`;

const PokemonListWrapper = styled.div`
	max-width: 420px;
`;
