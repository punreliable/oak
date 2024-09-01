import React, { useState, FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ButtonSearch from "./ButtonSearch";
import { createRoot } from 'react-dom/client'
import { FieldApi, useForm } from '@tanstack/react-form'
import { PokemonModal } from "./PokemonModal"
import MainNavigation from "./MainNavigation"
import { closeSinglePokemonModal, showSinglePokemonModal } from "../utilities/modals"



export default function PagePokemonSearch() {

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
      // Do something with form data
      console.log(value)
    },
  })
  

  return (
    <div>
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
              name="firstName"
              validators={{
                onChange: ({ value }) =>
                  !value
                    ? 'A name is required'
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
                    <label htmlFor={field.name}>Name:</label>
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
          {/* <div>
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
          </div> */}
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <button type="submit" disabled={!canSubmit} className="nes-btn is-primary">
                {isSubmitting ? '...' : 'Submit'}
              </button>
            )}
          />
        </form>
    </div>
  )
}