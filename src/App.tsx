import React, { lazy, Suspense, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   useNavigate,
// } from "react-router-dom";
import getCurrentMonth from "./utilities/getCurrentMonth";
import getCurrentDay from "./utilities/getCurrentDay";
import MainNavigation from "./components/MainNavigation";
import "./App.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import Error from "./pages/Home/Error";
import Pending from "./pages/Home/Pending";
import Result from "./pages/Home/Result";
import {PokemonFromAPI} from "./types";

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
  const {data, error, isLoading} = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      const id = getPokemonNumber();
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return response.data;
    }
  });

  if (isLoading) return (<Pending />)
    if (error) return (<Error />)
  

  return (
    <div className="App">
        <section className="nesContainer nes-container">
            <MainNavigation />
            {data && <Result pokemon={data} /> }
        </section>
    </div>
  );
};

export default App;
