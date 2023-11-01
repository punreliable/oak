import { useState, useEffect } from "react";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as bootstrap from "bootstrap";
import "./App.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss";
// import ProfessorOak from "./components/professorOak";

import professorOak from "./assets/oak.svg";
//import RootLayout from "./pages/Root";
//import HomePage from "./pages/Home";
//import ResultsPage from "./pages/Results";
import axios from 'axios';
import styled from "styled-components";

const App = () => {
  
  const number = Math.floor(Math.random() * 151) + 1;
  const pokeNo = number.toString();
  const requestURL = 'https://pokeapi.co/api/v2/pokemon/'+ pokeNo;
  
  const [pokemon, setPokemon] = useState( null );
  const [pokemonID, setPokemonID] = useState( null );
  const [pokemonAbilities, setPokemonAbilities] = useState( null );
  
  // let pokemonMoves = {};
  // let pokemonIMGs = {};
  // let pokemonSpecies = {};
  
  const prettyName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  
  useEffect(() => {
    axios.get( requestURL )
    .then( res => { 
      setPokemon(res.data)
      console.log(res.data)
     })
    .catch( err => { console.log(err) })
  }, [])



  return (
    <div className="App">
      { pokemon && (
        <>
        <div className="row">
          <img src={professorOak} id="imgProfessorOak" alt="Professor Oak" height="128" width="128" />
        </div>
        <professorh1>
          Hello, { prettyName( pokemon.name ) } <sup> #{pokemon.id}!</sup>
        </professorh1>
        </>
      )}
    </div>
  ); 
  
  // const Professor = styled.div`
  // background-size: cover;
  // background-repeat:norepeat;
  // background-position: center center;
  // height:256px;
  // width: 100%;
  // margin: 0 auto;
  // `;
  
  const professorh1 = styled.h1`
  font-size: 3.2rem;
  margin: 4rem;
  sup {
    font-size: 1.6rem;
    top: -0.8rem;
  }
  `;
  
};

export default App;
