import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import App from './App'
import PageTeam from './components/PageTeam'
import PageKantoPokemo from './components/dataFetching/PageKantoPokemon'
import PagePokemonTypesList from './components/pages/PagePokemonTypesList'
import PagePokemonTypeBug from './components/PagePokemonTypeBug'
import PagePokemonTypeDark from './components/PagePokemonTypeDark'
import PagePokemonTypeDragon from './components/PagePokemonTypeDragon'
import PagePokemonTypeElectric from './components/PagePokemonTypeElectric'
import PagePokemonTypeFairy from './components/PagePokemonTypeFairy'
import PagePokemonTypeFighting from './components/PagePokemonTypeFighting'
import PagePokemonTypeFire from './components/PagePokemonTypeFire'
import PagePokemonTypeFlying from './components/PagePokemonTypeFlying'
import PagePokemonTypeGhost from './components/PagePokemonTypeGhost'
import PagePokemonTypeGrass from './components/PagePokemonTypeGrass'
import PagePokemonTypeGround from './components/PagePokemonTypeGround'
import PagePokemonTypeIce from './components/PagePokemonTypeIce'
import PagePokemonTypeNormal from './components/PagePokemonTypeNormal'
import PagePokemonTypePoison from './components/PagePokemonTypePoison'
import PagePokemonTypePsychic from './components/PagePokemonTypePsychic'
import PagePokemonTypeRock from './components/PagePokemonTypeRock'
import PagePokemonTypeSteel from './components/PagePokemonTypeSteel'
import PagePokemonTypeWater from './components/PagePokemonTypeWater'
import PageKantoPokemon from './components/dataFetching/PageKantoPokemon'
import KantoPokedex from './pages/pokedex/KantoPokedex'
import MoreDetails from './components/MoreDetails'
// import PagePokemonTypeList from './components/PagePokemonTypeList'

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <App />,
	},
	{
	  path: "/team",
	  element: <PageTeam />,
	},
	{
	  path: "/kanto",
	  element: <PageKantoPokemon />,
	},
	{
	  path: "/pokemon",
	  element: <App />,
	},
	{
	  path: "/pokemon/type",
	  element: <PagePokemonTypesList />,
	},
	{
	  path: "/pokemon/type/bug",
	  element: <PagePokemonTypeBug />,
	},

	{
	  path: "/pokemon/type/dark",
	  element: <PagePokemonTypeDark />,
	},
  {
	  path: "/pokemon/type/dragon",
	  element: <PagePokemonTypeDragon />,
	},
	{
	  path: "/pokemon/type/electric",
	  element: <PagePokemonTypeElectric />,
	},
	{
	  path: "/pokemon/type/fairy",
	  element: <PagePokemonTypeFairy />,
	},
	{
	  path: "/pokemon/type/fighting",
	  element: <PagePokemonTypeFighting />,
	},
	{
	  path: "/pokemon/type/fire",
	  element: <PagePokemonTypeFire />,
	},
	{
	  path: "/pokemon/type/flying",
	  element: <PagePokemonTypeFlying />,
	},
	{
	  path: "/pokemon/type/ghost",
	  element: <PagePokemonTypeGhost />,
	},
	{
	  path: "/pokemon/type/grass",
	  element: <PagePokemonTypeGrass />,
	},
	{
	  path: "/pokemon/type/ground",
	  element: <PagePokemonTypeGround />,
	},
	{
	  path: "/pokemon/type/ice",
	  element: <PagePokemonTypeIce />,
	},
	{
	  path: "/pokemon/type/normal",
	  element: <PagePokemonTypeNormal />,
	},
	{
	  path: "/pokemon/type/poison",
	  element: <PagePokemonTypePoison />,
	},
	{
	  path: "/pokemon/type/psychic",
	  element: <PagePokemonTypePsychic />,
	},
	{
	  path: "/pokemon/type/rock",
	  element: <PagePokemonTypeRock />,
	},
	{
	  path: "/pokemon/type/steel",
	  element: <PagePokemonTypeSteel />,
	},
	{
	  path: "/pokemon/type/water",
	  element: <PagePokemonTypeWater />,
	},
	{
		path: "/pokedex",
		element: <KantoPokedex />,
	},
  	{
		path: "/pokedex/kanto",
		element: <KantoPokedex />,
	},
	{
		path: "/more-details",
		element: <MoreDetails />,
	},
  ])

import './index.scss'

const queryClient = new QueryClient()

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEV
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
	<ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
