import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { createRoot } from 'react-dom/client'
import { FieldApi, useForm } from '@tanstack/react-form'
import { PokemonModal } from "./PokemonModal"
import MainNavigation from "./MainNavigation"
import { closeModal, showModal } from "../utilities/modals"


const PagePokemonSearch = () => {

  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState<any>(null);

  const fetchPokemon = async (pokemon: string) => {
    const { data, isLoading } = await useQuery({
      queryKey: ['pokemon', pokemon],
      queryFn: async () => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        return data
      },
    });
    setPokemonData(data)
  }

  
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
      pokemon: 'mewtwo',
    },
    onSubmit: async ({ value }) => {
      setPokemon(value.pokemon)
      console.log(value)
    },
  })
  
  return(
    <>

    <div id="main">
      <MainNavigation /> 
      <h1 className="h1-responsive mb-4 pt-4 px-2 gameboy text-center font-weight-bold">
        Who's that Pokémon?
      </h1>
      <h2 className="h4-responsive gameboy text-center py-4 px-2">
        Learn more about Pokémon
      </h2>
      <hr className="py-2" />
      <p className="d-none d-md-block text-center pb-4 px-2 gameboy">
        Enter a Pokémon name
      </p>

      <div className="feature-image" style={{ backgroundImage: "url('http://poke.comicui.com/images/whos-that-pokemon.png')" }}>
        
        <div className="mask rgba-black-strong d-flex justify-content-center align-items-top">
          
          <main className="wow fadeIn content gameboy-screen">

            <form
              name="searchPokemon"
              id="searchPokemon"
              className="searchPokemon my-4 mx-4"
              onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
              }}
            >
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
                    return (
                      <>
                        <label htmlFor={field.name}>Name:</label>
                        <input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="form-control gameboy"
                        />
                        <FieldInfo field={field} />
                      </>
                    )
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
                      onClick={(pokemonData) => {
                        const dialog = document.getElementById('dialog-default');
                        if (dialog) {
                          (dialog as HTMLDialogElement).showModal();
                        }
                      }}>
                      {isSubmitting ? '...' : 'Search'}
                    </button>
 
                  )}
                />

              </div>

            </form>

          </main>

        </div>

      </div>

    </div>

    { pokemonData && ( <PokemonModal props={pokemonData} /> )}

    </>

  )

}

export default PagePokemonSearch;
