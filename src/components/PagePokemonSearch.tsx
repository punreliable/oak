import React, { useState, FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PagePokemonSearch = () => {

  const [pokemon, setPokemon] = useState(151);

  const { isLoading, isSuccess, error, data } = useQuery({
    queryKey: ["pokemon-search"],
    queryFn: async (id) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res?.json());
    },
  });
  
  function searchHandler(event: FormEvent<HTMLFormElement>) {
  
    event.preventDefault();
    const id = (event.target as HTMLFormElement).pokeno.value;
    setPokemon(id);
    
  }

  return (
  
    
    <div id="main">
      <div
        className="feature-image"
        style={{ backgroundImage: "url(`/images/whos-that-pokemon.png`)" }}
      >
        <div className="mask rgba-black-strong d-flex justify-content-center align-items-top">
          <main className="wow fadeIn content gameboy-screen">
            <h1 className="h1-responsive mb-4 pt-4 px-2 gameboy text-center font-weight-bold">
              Who's that Pokémon?
            </h1>

            <h2 className="h4-responsive gameboy text-center py-4 px-2">
              Learn more about Pokémon
            </h2>

            <hr className="py-2" />

            <p className="d-none d-md-block text-center pb-4 px-2 gameboy">
              Search by Pokémon name or number:
            </p>

            <form
              onSubmit={searchHandler}
              name="pokemon-by-number"
              id="pokemon-by-number"
              className="pokemon-by-number my-4 mx-4"
            >

              <div className="md-form form-group mx-2">
                <input
                  type="text"
                  name="pokeno"
                  id="pokeno"
                  className="form-control gameboy"
                  required
                  autoFocus
                  value={pokemon}
                />

                <label htmlFor="pokeno" data-error="wrong" data-success="right">
                  Enter Number
                </label>

              </div>

              <div className="md-form form-group text-center pt-4">
                
                <button
                  type="submit"
                  className="nes-btn is-primary gameboy white-text"
                >
                  Search
                </button>

              </div>

            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PagePokemonSearch;
