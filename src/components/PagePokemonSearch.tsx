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

  return(<h1>Hello World!</h1>);

}