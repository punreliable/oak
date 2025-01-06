import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "../../App.scss";
import "/node_modules/bootstrap/scss/bootstrap.scss";
import unknown from "../../assets/0.png";
import professorOak from "../../assets/oak.svg";
import MainNavigation from "../../components/MainNavigation";

const Error = () => {

  const navigate = useNavigate();

  return (
    <div className="App">

        <section className="nesContainer nes-container">
          <MainNavigation />
          <h1 className="oakHello">Error</h1>

          <img
            className="nes-avatar avatar pokemonAvatar"
            alt="There was an error fetching your pokemon, please try again"
            id="avatar"
            src={unknown}
          />

      <div className="row">
        <div className="col-md-12">
          <p>
            There was an error trying to fetch your Pokemon. 
            Please click the button below to try again.
          </p>
          <button
            type="button"
            className="nes-btn"
            onClick={() => {
              navigate(0);
            }}
          >
            Try Again
          </button>
        </div>
      </div>

      <section
        className="message-list messageList"
        id="professorMessages"
      >
        <section className="message -right">
          <div className="nes-balloon from-right">
            <p>
              Please try again by clicking the button above!
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

export default Error;
