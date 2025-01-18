"use client";
import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import {PokedexRowOne} from "./PokedexRowOne";
import {PokedexRowTwo} from "./PokedexRowTwo";
import {PokedexRowThree} from "./PokedexRowThree";
import {PokedexRowFour} from "./PokedexRowFour";
import {PokedexRowFive} from "./PokedexRowFive";
import {PokedexRowSix} from "./PokedexRowSix";
import {PokedexRowSeven} from "./PokedexRowSeven";

const KantoPokedex = () => {

  const {data, isLoading, isError} = useQuery({
    queryKey: ['pokedex'],
    queryFn: async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      return res.data;
    }
  });

  console.log(data);

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Something went wrong!</p>

  return (
    <div className="container">
      <section className='nesContainer nes-container'>
        <div className="row">
          <h1 className="text-center">Kanto Pokedex</h1>
        </div>

        <div className="nes-table-responsive">

        <PokedexRowOne />
        <PokedexRowTwo />
        <PokedexRowThree />
        <PokedexRowFour />
        <PokedexRowFive />
        <PokedexRowSix />
        <PokedexRowSeven />

 {/*
 
 Pokedex Row 1
 1 - 25

Pokedex Row 2
 26 - 50

 Pokedex Row 3
 51 - 75

 Pokedex Row 4
 76 - 100

 Pokedex Row 5
 101 - 125

 Pokedex Row 6
 126 - 150

 Pokedex Row 7
 151
 */}
        </div>

 
      </section>
    </div>
  )
  
};

export default KantoPokedex;
