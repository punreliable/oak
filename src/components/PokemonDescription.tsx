import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import prettyName from "../utilities/prettyName";
import { R } from "@tanstack/react-query-devtools/build/legacy/devtools-dKCOqp9Q";
// import { R } from '@tanstack/react-query-devtools/build/legacy/devtools-dKCOqp9Q'

const fetchPokemonBaseHappiness = async (requestURL: string) => {
  const response = await axios.get(requestURL);
  if (response.status !== 200) {
    throw new Error("Happiness could not be found.");
  }
  return response;
};

const style: React.CSSProperties = {
  textAlign: "left",
};

const PokemonDescription = (pokemonId: object) => {
  // useEffect(() => {
  // 	axios.get( requestURL )
  // 	.then( response => {
  // 		setDescription(response.data.flavor_text_entries[0].flavor_text)
  // 		setBaseHappiness(response.data.base_happiness)// Access the 'data' property of the 'response' object
  // 		})
  // 	.catch( err => { console.log( err )
  // 	}, [])

  const [baseHappiness, setBaseHappiness] = useState(0);
  const [description, setDescription] = useState("Loading...");

  const requestURL = `https://pokeapi.co/api/v2/pokemon-species/${parseInt(pokemonId.pokemon)}`;

  console.log(requestURL);
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["pokemon-species", requestURL],
    queryFn: () => fetchPokemonBaseHappiness(requestURL),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={style}>
      <p>Description: {data.data.flavor_text_entries[0].flavor_text}</p>
      <p>Base Happiness: {data.data.base_happiness}</p>
    </div>
  );
};

export default PokemonDescription;
