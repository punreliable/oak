import React, { useState } from "react";
//import * as React from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createRoot } from 'react-dom/client'
import { useForm } from '@tanstack/react-form'
import type { FieldApi } from '@tanstack/react-form'
import { p } from "msw/lib/core/GraphQLHandler-COiPfZ8k";

const PagePokemonSearch = () => {

  const [pokemon, setPokemon] = useState(151);

  function searchHandler() {
    setPokemon(pokemon);
  }

  const { isLoading, isSuccess, error, data } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async (pokemon) => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((res) => res.data.results);
    },
  });
  
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
      firstName: '',
      lastName: '',
      pokeno: '',
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value)
    },
  })
  
  return(
      <div id="main">

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

        <div className="feature-image" style={{ backgroundImage: "url('http://poke.comicui.com/images/whos-that-pokemon.png')" }}>
          
          <div className="mask rgba-black-strong d-flex justify-content-center align-items-top">
            
            <main className="wow fadeIn content gameboy-screen">

              <form
                name="pokemon-by-number"
                id="pokemon-by-number"
                className="pokemon-by-number my-4 mx-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  form.handleSubmit()
                }}
              >
                <div>
                  {/* A type-safe field component*/}
                  <form.Field
                    name="firstName"
                    validators={{
                      onChange: ({ value }) =>
                        !value
                          ? 'A first name is required'
                          : value.length < 3
                            ? 'First name must be at least 3 characters'
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
                      // Avoid hasty abstractions. Render props are great!
                      return (
                        <>
                          <label htmlFor={field.name}>First Name:</label>
                          <input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                          <FieldInfo field={field} />
                        </>
                      )
                    }}
                  />
                </div>
                <div>
                  <form.Field
                    name="lastName"
                    children={(field) => (
                      <>
                        <label htmlFor={field.name}>Last Name:</label>
                        <input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <FieldInfo field={field} />
                      </>
                    )}
                  />
                </div>
                <div className="md-form form-group mx-2">
                    <input
                      type="text"
                      name="pokeno"
                      id="pokeno"
                      className="form-control gameboy"
                      required
                      autoFocus
                    />

                    <label htmlFor="pokeno" data-error="wrong" data-success="right">
                      Enter Number
                    </label>
                  </div>
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                    <div className="md-form form-group text-center pt-4">
                      <button 
                        type="submit" 
                        disabled={!canSubmit}
                        className="nes-btn is-primary gameboy white-text">
                        {isSubmitting ? '...' : 'Search'}
                      </button>
                    </div>
                  )}
                />
              </form>
              
            </main>

          </div>
        </div>
      </div>

  );
 




















      


  }

export default PagePokemonSearch;
