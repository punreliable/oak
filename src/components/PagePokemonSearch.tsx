import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createRoot } from 'react-dom/client'
import { FieldApi, useForm } from '@tanstack/react-form'


const PagePokemonSearch = () => {

  
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
      pokeNo: 151,
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
              <div className="md-form form-group mx-2">
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
                          className="form-control gameboy"
                        />
                        <FieldInfo field={field} />
                      </>
                    )
                  }}
                />
              </div>

              <div className="md-form form-group mx-2">
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
                        className="form-control gameboy"
                      />
                      <FieldInfo field={field} />
                    </>
                  )}
                />
              </div>

              <div className="md-form form-group mx-2">

                <form.Field
                  name="pokeNo"
                  validators={{
                  onChange: ({value}) =>
                    value > 0 && value < 152 ? 'Number must be between 1 and 150' : undefined,
                  }}
                >
                  {(field) => (
                  <>
                    <label htmlFor={field.name}>Number:</label>
                    <input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      type="number"
                      className="form-control gameboy"
                      onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                    />
                    {field.state.meta.errors ? (
                      <em role="alert">{field.state.meta.errors.join(', ')}</em>
                    ) : null}
                  </>
                )}
                </form.Field>
              </div>

              <div className="md-form form-group text-center pt-4">
                
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (

                    <button 
                      type="submit" 
                      disabled={!canSubmit}
                      className="nes-btn is-primary gameboy white-text">
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

  )

}

export default PagePokemonSearch;
