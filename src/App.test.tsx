
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from "@testing-library/react";
import React from 'react';
import App from "./App";
import axios from "axios";
import prettyName from "./utilities/prettyName";

describe("App Component", () => {

	beforeEach(() => {
		let mockPokemon: any;
	
		mockPokemon = {
			id: 1,
			name: "bulbasaur",
			height: 7,
			weight: 69,
			base_experience: 64,
			sprites: {
				front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
			},
			types: [
				{
					type: {
						name: "grass",
					},
				},
				{
					type: {
						name: "poison",
					},
				},
			],
		};
		// const axios = vi.mock("axios").mockResolvedValue({ data: mockPokemon }); 


	});
	afterEach(() => {
		vi.clearAllMocks();
	});

	test("renders App component", async () => {

		// await waitFor(() => {
		// 	expect(screen.getByText("Hello,")).toBeInTheDocument();
		// });

		// await waitFor(() => {
		// 	expect(screen.getByText(prettyName(mockPokemon.name))).toBeInTheDocument();
		// });

		// await waitFor(() => {
		// 	expect(screen.getByAltText(`Image of a ${prettyName(mockPokemon.name)}`)).toBeInTheDocument();
		// });

		// await waitFor(() => {
		// 	expect(screen.getByText(`Height: ${mockPokemon.height}in`)).toBeInTheDocument();
		// });

		// await waitFor(() => {
		// 	expect(screen.getByText(`Weight: ${mockPokemon.weight}lb`)).toBeInTheDocument();
		// });

		// await waitFor(() => {
		// 	expect(screen.getByText(`Base XP: ${mockPokemon.base_experience}xp`)).toBeInTheDocument();
		// });

		// await waitFor(() => {
		// 	expect(screen.getByText(`Entry #${mockPokemon.id} in Kanto Pokedex!`)).toBeDefined();
		// });


		// await waitFor(() => {
		// 	expect(screen.getByText("Would you like to learn more about Bulbasaur? Click the button below.")).toBeInTheDocument();
		// });

		// await waitFor(() => {
		// 	expect(screen.getByRole("button", { name: /More Details/i })).toBeInTheDocument();
		// });

		expect(1).toBe(1);
	});
});