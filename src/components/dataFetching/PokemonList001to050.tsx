import React, { useState, useEffect } from "react";
import axios from "axios";
import prettyName from "../../utilities/prettyName";

const PokemonList001to050 = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="lists">
      <ul className="nes-list is-disc">
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{prettyName(pokemon.name)}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList001to050;
