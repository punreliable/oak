"use client";
import React, {useState} from 'react';
import WhoseThatPokemon from './WhoseThatPokemon';

const PokemonPage = () => {

const [pokemon, setPokemon] = useState<string|null>(null);
const [inputIdentifier, setInputIdentifier] = useState<string>('');

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setPokemon(inputIdentifier);
};

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputIdentifier(event.target.value);
};

return(

  <div id="main">

    <div className="feature-image" style={{"backgroundImage": "url('/images/whos-that-pokemon.png');"}}>

      <div className="mask rgba-black-strong d-flex justify-content-center align-items-top">

        <main className="wow fadeIn content gameboy-screen">

          <h1 className="h1-responsive mb-4 pt-4 px-2 gameboy text-center font-weight-bold">Who's that Pokémon?</h1>

          <h2 className="h4-responsive gameboy text-center py-4 px-2">Learn more about Pokémon</h2>

          <hr className="py-2" />

          <p className="d-none d-md-block text-center pb-4 px-2 gameboy">
            Search by Pokémon name or number:
          </p>

          <form
            onSubmit={handleSubmit}
            name="pokemon-by-number"
            id="pokemon-by-number"
            className="pokemon-by-number my-4 mx-4">

            <div className="md-form form-group mx-2">

              <div className="nes-field">
                <label htmlFor="pokemon">Enter Name or Number</label>
                <input 
                  type="text" 
                  className="nes-input form-control gameboy" 
                  id="pokemon" 
                  name="pokemon" 
                  onChange={handleInputChange} 
                  value={inputIdentifier} 
                  required
                />
              </div>

              <label 
                htmlFor="pokemon"
                data-error="wrong"
                data-success="right">
                Enter Name or Number
              </label>

            </div>

            <div className="md-form form-group text-center pt-4">
              <button type="submit" className="nes-btn is-primary gameboy white-text">Search</button>
            </div>

          </form>

            {pokemon && <WhoseThatPokemon pokemon={pokemon} />}

          </main>

        </div>

      </div>

    </div>
  );
};

export default PokemonPage;
