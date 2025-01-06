import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import App from "./App";
import PageTeam from "./components/PageTeam";
import PagePokemonTypesList from "./components/pages/PagePokemonTypesList";
// import PagePokemonTypeBug from "pages/Pokemon/Types/PagePokemonTypeBug";
// import PagePokemonTypeDark from "pages/Pokemon/Types/PagePokemonTypeDark";
// import PagePokemonTypeDragon from "pages/Pokemon/Types/PagePokemonTypeDragon";
// import PagePokemonTypeElectric from "pages/Pokemon/Types/PagePokemonTypeElectric";
// import PagePokemonTypeFairy from "pages/Pokemon/Types/PagePokemonTypeFairy";
// import PagePokemonTypeFighting from "pages/Pokemon/Types/PagePokemonTypeFighting";
// import PagePokemonTypeFire from "pages/Pokemon/Types/PagePokemonTypeFire";
// import PagePokemonTypeFlying from "pages/Pokemon/Types/PagePokemonTypeFlying";
// import PagePokemonTypeGhost from "pages/Pokemon/Types/PagePokemonTypeGhost";
// import PagePokemonTypeGrass from "pages/Pokemon/Types/PagePokemonTypeGrass";
// import PagePokemonTypeGround from "pages/Pokemon/Types/PagePokemonTypeGround";
// import PagePokemonTypeIce from "pages/Pokemon/Types/PagePokemonTypeIce";
// import PagePokemonTypeNormal from "pages/Pokemon/Types/PagePokemonTypeNormal";
// import PagePokemonTypePoison from "pages/PagePokemonTypePoison";
// import PagePokemonTypePsychic from "pages/Pokemon/Types/PagePokemonTypePsychic";
// import PagePokemonTypeRock from "pages/Pokemon/Types/PagePokemonTypeRock";
// import PagePokemonTypeSteel from "pages/Pokemon/Types/PagePokemonTypeSteel";
// import PagePokemonTypeWater from "pages/Pokemon/Types/PagePokemonTypeWater";
import PageKantoPokemon from "./components/dataFetching/PageKantoPokemon";
import KantoPokedex from "./(pages)/pokedex/KantoPokedex";
import PagePokemonCarousel from "./components/PagePokemonCarousel";
import PagePokemonSearch from "./components/PagePokemonSearch";
import "./index.scss";
// import 'dotenv/config';


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
  // {
  //   path: "/pokemon/type/bug",
  //   element: <PagePokemonTypeBug />,
  // },

  // {
  //   path: "/pokemon/type/dark",
  //   element: <PagePokemonTypeDark />,
  // },
  // {
  //   path: "/pokemon/type/dragon",
  //   element: <PagePokemonTypeDragon />,
  // },
  // {
  //   path: "/pokemon/type/electric",
  //   element: <PagePokemonTypeElectric />,
  // },
  // {
  //   path: "/pokemon/type/fairy",
  //   element: <PagePokemonTypeFairy />,
  // },
  // {
  //   path: "/pokemon/type/fighting",
  //   element: <PagePokemonTypeFighting />,
  // },
  // {
  //   path: "/pokemon/type/fire",
  //   element: <PagePokemonTypeFire />,
  // },
  // {
  //   path: "/pokemon/type/flying",
  //   element: <PagePokemonTypeFlying />,
  // },
  // {
  //   path: "/pokemon/type/ghost",
  //   element: <PagePokemonTypeGhost />,
  // },
  // {
  //   path: "/pokemon/type/grass",
  //   element: <PagePokemonTypeGrass />,
  // },
  // {
  //   path: "/pokemon/type/ground",
  //   element: <PagePokemonTypeGround />,
  // },
  // {
  //   path: "/pokemon/type/ice",
  //   element: <PagePokemonTypeIce />,
  // },
  // {
  //   path: "/pokemon/type/normal",
  //   element: <PagePokemonTypeNormal />,
  // },
  // {
  //   path: "/pokemon/type/poison",
  //   element: <PagePokemonTypePoison />,
  // },
  // {
  //   path: "/pokemon/type/psychic",
  //   element: <PagePokemonTypePsychic />,
  // },
  // {
  //   path: "/pokemon/type/rock",
  //   element: <PagePokemonTypeRock />,
  // },
  // {
  //   path: "/pokemon/type/steel",
  //   element: <PagePokemonTypeSteel />,
  // },
  // {
  //   path: "/pokemon/type/water",
  //   element: <PagePokemonTypeWater />,
  // },
  {
    path: "/pokedex",
    element: <KantoPokedex />,
  },
  {
    path: "/pokedex/kanto",
    element: <KantoPokedex />,
  },
  {
    path: "/carousel",
    element: <PagePokemonCarousel />,
  },
  {
    path: "/search",
    element: <PagePokemonSearch />,
  },
]);

const queryClient = new QueryClient();

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement || document.createElement("div"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
);
