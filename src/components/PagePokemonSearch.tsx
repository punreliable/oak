import React, { useState, FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ButtonSearch from "./ButtonSearch";
import { createRoot } from 'react-dom/client'
import { FieldApi, useForm } from '@tanstack/react-form'
import { PokemonModal } from "./PokemonModal"
import MainNavigation from "./MainNavigation"
import { closeSinglePokemonModal, showSinglePokemonModal } from "../utilities/modals"
import prettyName from "../utilities/prettyName"
import "./PagePokemonSearch.scss"

<<<<<<< HEAD
// import { pokemonImage } from "../assets/who-is-that-pokemon.png"

export const PagePokemonSearch = () => {

  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState<any>(null);

  // const fetchPokemon = async (pokemon: string) => {
  //   const { data, isLoading } = await useQuery({
  //     queryKey: ['pokemon', pokemon],
  //     queryFn: async () => {
  //       const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  //       return data
  //     },
  //   });
  //   setPokemonData(data)
  // }

  const { isLoading, isSuccess, error, data } = useQuery({
    queryKey: ["pokemon-search"],
    queryFn:  fetchPokemon(pokemon)
  })

  function async fetchPokemon(pokemon: string) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res?.json());
  }
  
=======
export default function PagePokemonSearch() {

  const [pokemon, setPokemon] = useState<any>(false);
  const [enteredValue, setEnteredValue] = useState(false);

>>>>>>> 393014a94d7cc04629954344fbf2953f556fba8c
  function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
    return (
      <>
        {field.state.meta.isTouched && field.state.meta.errors.length ? (
          <em>{field.state.meta.errors.join(", ")}</em>
        ) : null}
        {field.state.meta.isValidating ? 'Validating...' : null}
      </>
    )
  }

  const form = useForm({
    defaultValues: {
      name: '',

    },
<<<<<<< HEAD
  });
  
  // function searchHandler(event: FormEvent<HTMLFormElement>) {
  
  //   // console.log('Search Handler Begins');
  //   event.preventDefault();
  //   const id = (event.target as HTMLFormElement).pokeno.value;
  //   setPokemon(id);
  //   // console.log('Pokemon ID: ', id);
  //   // console.log('Search Handler Ends.');
  // }
  //   onSubmit: async ({ value }) => {
  //     setPokemon(value.pokemon)
  //     // console.log(value)
  //   },
  // })
  
  return(


    <div id="main">

      <MainNavigation /> 
      <h1 className="h1-responsive mb-4 pt-4 px-2 gameboy text-center font-weight-bold">
        Who's that Pokémon?
      </h1>
      <h2 className="h4-responsive gameboy text-center py-4 px-2">
      Enter a Pokémon name
      </h2>
      
      <hr className="py-2" />
      
      <div className="feature-image">
        
        <div className="mask rgba-black-strong d-flex justify-content-center align-items-top">
          
          <main className="wow fadeIn content gameboy-screen">

            <form
              name="searchPokemon"
              id="searchPokemon"
              className="searchPokemon my-4 mx-4">

              <div className="md-form form-group mx-2">
   
                <form.Field
                  name="pokemon"
                  validators={{
                    onChange: ({ value }) =>
                      !value
                        ? 'A name or number is required'
                        : value.length < 3
                          ? 'Name must be at least 3 characters'
                          : undefined,
                    onChangeAsyncDebounceMs: 500,
                    onChangeAsync: async ({ value }) => {
                      await new Promise((resolve) => setTimeout(resolve, 1000))
                      return (
                        value.includes('error') &&
                        'No "error" allowed in first name'
                      )
                    },
                  }}
                  children={(field) => {
=======
    onSubmit: async ({ value }) => {
      const name = value.name;
      const results = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemon(results);
    },
  })

  return (
    <>
        <section className="nesContainer nes-container">
        <MainNavigation />
        <h1>Search by Name</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              form.handleSubmit()
            }}
          >
            <div>
              {/* A type-safe field component*/}
              <form.Field
                name="name"
                validators={{
                  onChange: ({ value }) =>
                    !value
                      ? 'A name is required'
                      : value.length < 3
                        ? 'Name must be at least 3 characters'
                        : undefined,
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: async ({ value }) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000))
>>>>>>> 393014a94d7cc04629954344fbf2953f556fba8c
                    return (
                      value.includes('error') &&
                      'No "error" allowed in name'
                    )
<<<<<<< HEAD
                  }}
                />
              </div>

              <div className="md-form form-group text-center pt-4">
                
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                    <button 
                      type="submit" 
                      disabled={!canSubmit}
                      className="nes-btn is-primary gameboy white-text"
                      onClick=
                      {(pokemonData) => {
                        const dialog = document.getElementById('dialogSinglePokemon');
                      }}
                      >
                      {isSubmitting ? '...' : 'Search'}
                    </button>
 
                  )}
                />

              </div>

            </form>

          </main>

        </div>
=======
                  },
                }}
                children={(field) => {
                  // Avoid hasty abstractions. Render props are great!
                  return (
                    <div className="nes-field">
                      {/* <label htmlFor={field.name}>Name:</label> */}
                      <input
                        className="nes-field"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
>>>>>>> 393014a94d7cc04629954344fbf2953f556fba8c

                      />
                      <FieldInfo field={field} />
                    </div>
                  )
                }}
              />
            </div>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <button id="submit" type="submit" disabled={!canSubmit} className="nes-btn is-primary">
                  {isSubmitting ? '...' : 'Submit'}
                </button>
              )}
            />
          </form>
          {pokemon.data && (
      
      <div id="results">
        <p>
          { prettyName(`${pokemon.data.name}`)} is pokemon #{`${pokemon.data.id}`}
        </p>
      </div>
<<<<<<< HEAD

    </div>
  )
}
=======
    )}
      </section>
      </>
  )
}
>>>>>>> 393014a94d7cc04629954344fbf2953f556fba8c
