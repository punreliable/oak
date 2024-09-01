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

export default function PagePokemonSearch() {

  const [pokemon, setPokemon] = useState<any>(false);
  const [enteredValue, setEnteredValue] = useState(false);

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
                    return (
                      value.includes('error') &&
                      'No "error" allowed in name'
                    )
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
    )}
      </section>
      </>
  )
}