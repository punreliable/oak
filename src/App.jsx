import { useState, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import axios from 'axios';
import styled from "styled-components";
import * as bootstrap from "bootstrap";
import "./App.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import prettyName from "./utilities/prettyName";
import professorOak from "./assets/oak.svg";
import PokemonTypeList from "./components/PokemonTypeList";

gsap.registerPlugin( MotionPathPlugin )

const App = () => {
  // OMG GSAP is working!
  //gsap.to("#avatar", { x: 100, duration: 2 });
  //gsap.to("#imgProfessorOak", {x: 100, duration: 1 });

  const number = Math.floor( Math.random() * 151 ) + 1
  const pokeNo = number.toString()
  const requestURL = 'https://pokeapi.co/api/v2/pokemon/'+ pokeNo

  const [pokemon, setPokemon] = useState( null )
  const [pokemonID, setPokemonID] = useState( null )
  const [pokemonAbilities, setPokemonAbilities] = useState( null )
  const [pokemonHeight, setPokemonHeight] = useState( null )
  const [pokemonWeight, setPokemonWeight] = useState( null )
  const [pokemonXP, setPokemonXP] = useState( null )
  const [pokemonTypes, setPokemonTypes] = useState( null )
  let pokemonMoves = {}
  let pokemonIMGs = {}
  let pokemonSpecies = {}

  let imageSrc = 'https://www.gravatar.com/avatar?s=15'

  useEffect(() => {
    axios.get( requestURL )
    .then( res => {
      setPokemon(res.data)
      setPokemonHeight(res.data.height)
      setPokemonWeight(res.data.weight)
      setPokemonXP(res.data.base_experience)
     })
    .catch( err => { console.log( err ) })
  }, [])

  return (
    <div className="App">
      { pokemon && (
        <section className="nesContainer nes-container">

          <h1 className="oakHello">Hello,</h1>
          <h1 className="pokemonName">{ prettyName( pokemon.name ) }</h1>

          <img
            className="nes-avatar avatar pokemonAvatar"
            alt="Gravatar image example"
            id="avatar"
            src={pokemon.sprites.front_default} />

          <p>Height: {pokemon.height}in</p>
          <p>Weight: {pokemon.weight}lb</p>
          <p>Base XP: {pokemon.base_experience}xp</p>

          <PokemonTypeList types={pokemon.types} />

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
