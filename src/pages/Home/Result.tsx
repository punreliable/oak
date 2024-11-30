import React, { lazy, Suspense, useState, useEffect } from "react";
import axios from "axios";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Pokemon, PokemonType } from "../../types/index";
import prettyName from "../../utilities/prettyName";
import getCurrentMonth from "../../utilities/getCurrentMonth";
import getCurrentDay from "../../utilities/getCurrentDay";
import PokemonTypeList from "../../components/PokemonTypeList";
import MainNavigation from "../../components/MainNavigation";
import "../../App.scss";
import "/node_modules/bootstrap/scss/bootstrap.scss";
import professorOak from "../../assets/oak.svg";
import PokemonDescription from "../../components/PokemonDescription";

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

const Result = ( props: Pokemon ) => {

  const gotoMoreDetails = (id: number) => {
    console.log(id);
  };

  const number = Math.floor(Math.random() * 151) + 1;
  const pokeNo = number.toString();
  const requestURL = "https://pokeapi.co/api/v2/pokemon/" + pokeNo;
  const [pokemonData, setPokemonData] = useState<any | null>(null);
  const [pokemonName, setPokemonName] = useState('Loading...');
  const [pokemonHeight, setPokemonHeight] = useState(null);
  const [pokemonWeight, setPokemonWeight] = useState(null);
  const [pokemonXP, setPokemonXP] = useState(null);


  return (

    <div className="App">

        <section className="nesContainer nes-container">

          <MainNavigation />

          <h1 className="oakHello">Hello,</h1>
        
            <h1 className="pokemonName">
              {
              // prettyName(props.name)
              }

            </h1>

            <img
              className="nes-avatar avatar pokemonAvatar"
              alt={"Image of a " + prettyName(props.name)}
              id="avatar"
              src={props?.sprites.front_default}
            />

            <div className="row rowStats">
              <div className="col-md-12 col-lg-3 stats">
                {props.height && <p>Height: {props.height}in</p>}
                <p>Weight: {props.weight}lb</p>
                <p>Base XP: {props.base_experience}xp</p>
              </div>
              <div className="col-md-12 col-lg-9">
                <PokemonDescription pokemon={props.id as number} />
              </div>
            </div>

            <PokemonTypeList types={props.types} />

            <div className="row">
              <div className="col-md-12">
                <p>
                  Would you like to learn more about {prettyName(props.name)}?
                  Click the button below.
                </p>
                <button
                  type="button"
                  className="nes-btn"
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
                    Entry #{props.id} in <br />
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
      </div>
  );
};

export default Result;
