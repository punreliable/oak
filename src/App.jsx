import { useState, useEffect } from "react";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as bootstrap from "bootstrap";
import "./App.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss";
// import ProfessorOak from "./components/professorOak";

import { gsap } from "gsap/dist/gsap";  
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

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
  const [pokemonHeight, setPokemonHeight] = useState( null );
  const [pokemonWeight, setPokemonWeight] = useState( null );
  const [pokemonXP, setPokemonXP] = useState( null );
  
  let pokemonMoves = {};
  let pokemonIMGs = {};
  let pokemonSpecies = {};
  
  const prettyName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  
  useEffect(() => {
    axios.get( requestURL )
    .then( res => { 
      setPokemon(res.data)
      setPokemonHeight(res.data.height)
      setPokemonWeight(res.data.weight)
      setPokemonXP(res.data.base_experience)
      for ( res.data.abilities.ability in res.data.abilities ) {
        console(ability.name);
      }
      console.log(res.data.abilities)
     })
    .catch( err => { console.log(err) })
  }, [])

  return (
    <div className="App">
      { pokemon && (
        <section className="nes-container">
        <h1 className="oakHello">Hello, { prettyName( pokemon.name ) }</h1>
        <img 
        className="nes-avatar is-large avatar" 
        alt="Gravatar image example" 
        src="https://www.gravatar.com/avatar?s=15" />
        <p>Height: {pokemon.height}in</p>
        <p>Weight: {pokemon.weight}lb</p>
        <p>Base Experience: {pokemon.base_experience}xp</p>

          <section className="message-list" id="professorMessages">
            <section className="message -right">
              <div className="nes-balloon from-right">
                <p>Entry #{pokemon.id} in <br />Kanto Pokedex!</p>
              </div>
              <div className="wrapperOak">
                <img src={professorOak} id="imgProfessorOak" alt="Professor Oak" height="64" width="64" />
              </div>
            </section>
          </section>
        </section>
        

      )}
    </div>
  ); 
  
};

export default App;
