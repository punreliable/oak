import React from "react";
// import axios from "axios";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   useNavigate,
// } from "react-router-dom";
import { PokemonFromAPI, PokemonTypeFromAPI } from "../../types/index";
import prettyName from "../../utilities/prettyName";
import PokemonTypeList from "../../components/PokemonTypeList";
import MainNavigation from "../../components/MainNavigation";
import "../../App.scss";
import "/node_modules/bootstrap/scss/bootstrap.scss";
import professorOak from "../../assets/oak.svg";
import PokemonDescription from "../../components/PokemonDescription";


const Result = ( props: PokemonFromAPI ) => {

  return (

    <div className="App">

        <section className="nesContainer nes-container">

          <MainNavigation />

          <h1 className="oakHello">Hello,</h1>
        
            <h1 className="pokemonName">
              {
              //prettyName(
                props?.name
              //)
              }

            </h1>

            {/* <img
              className="nes-avatar avatar pokemonAvatar"
              alt={"Image of a " + 
                //prettyName(
                props?.name
                //)
              }
              id="avatar"
              src={
                props?.sprites?.front_default
              }
            /> */}

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

            {/* <PokemonTypeList types={props.types} /> */}

            <div className="row">
              <div className="col-md-12">
                <p>
                  Would you like to learn more about {
                    //prettyName(
                    props.name
                    //)
                    }?
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
              // unresolved
            >
              <section className="message -right">
                <div className="nes-balloon from-right">
                  <p>
                    Entry #{props?.id} in <br />
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
