import React, { lazy, Suspense, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Pokemon } from "./types/pokemon";
import { PokemonType } from "./types/pokemon-type";
import prettyName from "./utilities/prettyName";
import getCurrentMonth from "./utilities/getCurrentMonth";
import getCurrentDay from "./utilities/getCurrentDay";
import PokemonTypeList from "./components/PokemonTypeList";
import MainNavigation from "./components/MainNavigation";
import "./App.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import professorOak from "./assets/oak.svg";
import PokemonDescription from "./components/PokemonDescription";
import { getRandomKantoPokemon } from "./utilities/getRandomKantoPokemon";

// import { Pokemon } from '../pokemon.d.ts'
// import { gsap } from 'gsap/dist/gsap'
// import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'
import * as bootstrap from "bootstrap";
// gsap.registerPlugin( MotionPathPlug )

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

const getPokemonNumber = () => {
  const number = Math.floor(Math.random() * 151) + 1;

  if (number < 10) {
    return `0${number}`;
  }

  return `${number}`;
};

const App = () => {
  // OMG GSAP is working!

  // gsap.to(
  //   "#imgProfessorOak", {
  //     delay: 0,
  //     opacity: 0,
  //   }
  // );

  // gsap.to(
  //   "#imgProfessorOak", {
  //     duration: 1,
  //     delay: 0,
  //     opacity: 1
  //   }
  // );

  // gsap.fromTo(
  //   "#professorMessages",
  //   1,
  //   {
  //     opacity: 0,
  //     y: 50
  //   },
  //   {
  //     opacity: 1,
  //     y: 0
  //   }
  // );

  // gsap.to(
  //   "#imgProfessorOak", {
  //     duration: .5,
  //     delay: 1,
  //     opacity: 1
  //   }
  // );
  // gsap.to("#avatar", { x: 100, duration: 2 });
  // gsap.to("#imgProfessorOak", {x: 100, duration: 1 });

  const gotoMoreDetails = (id: number) => {
    console.log(id);
  };

  const number = Math.floor(Math.random() * 151) + 1;
  const pokeNo = number.toString();
  const requestURL = "https://pokeapi.co/api/v2/pokemon/" + pokeNo;
  const [pokemon, setPokemon] = useState<any | null>(null);
  const [pokemonName, setPokemonName] = useState(null);
  const [pokemonID, setPokemonID] = useState(null);
  const [pokemonAbilities, setPokemonAbilities] = useState(null);
  const [pokemonHeight, setPokemonHeight] = useState(null);
  const [pokemonWeight, setPokemonWeight] = useState(null);
  const [pokemonXP, setPokemonXP] = useState(null);
  const [pokemonTypes, setPokemonTypes] = useState(null);

  useEffect(() => {
    axios
      .get(requestURL)
      .then((res) => {
        setPokemon(res.data);
        setPokemonHeight(res.data.height);
        setPokemonWeight(res.data.weight);
        setPokemonXP(res.data.base_experience);
        setPokemonName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {pokemon && (
        <section className="nesContainer nes-container">
          <MainNavigation />
          <h1 className="oakHello">Hello,</h1>
          {pokemon && pokemonName && (
            <h1 className="pokemonName">{prettyName(pokemonName)}</h1>
          )}
          {pokemon && (
            <img
              className="nes-avatar avatar pokemonAvatar"
              alt={"Image of a " + prettyName(pokemonName)}
              id="avatar"
              src={pokemon?.sprites.front_default}
            />
          )}
          <div className="row rowStats">
            <div className="col-md-12 col-lg-3 stats">
              {pokemon.height && <p>Height: {pokemon.height}in</p>}
              <p>Weight: {pokemon.weight}lb</p>
              <p>Base XP: {pokemon.base_experience}xp</p>
            </div>
            <div className="col-md-12 col-lg-9">
              <PokemonDescription pokemon={pokemon.id as number} />
            </div>
          </div>

          <PokemonTypeList types={pokemon.types} />

          <div className="row">
            <div className="col-md-12">
              <p>
                Would you like to learn more about {prettyName(pokemon.name)}?
                Click the button below.
              </p>
              <button
                type="button"
                className="nes-btn"
                onClick={gotoMoreDetails(pokemon.id)}
              >
                More Details
              </button>
            </div>
          </div>

          <section
            className="message-list messageList"
            id="professorMessages"
            unresolved
          >
            <section className="message -right">
              <div className="nes-balloon from-right">
                <p>
                  Entry #{pokemon.id} in <br />
                  Kanto Pokedex!
                </p>
              </div>
              <div className="wrapperOak">
                <img
                  src={professorOak}
                  id="imgProfessorOak"
                  alt="Professor Oak"
                  height="64"
                  width="64"
                />
              </div>
            </section>
          </section>
        </section>
      )}
    </div>
  );
};

export default App;
