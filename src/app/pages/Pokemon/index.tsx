import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MainNavigation from "../../MainNavigation";
import Error from "./Home/Error";
import Pending from "./Home/Pending";
import Result from "./Home/Result";
import {PokemonFromAPI} from "../../../../types";
import "./App.scss";

const getPokemonNumber = () => {
  const number = Math.floor(Math.random() * 151) + 1;
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
};

const PokemonPage = () => {
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

export default PokemonPage;
