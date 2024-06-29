import React from "react";

export function getRandomPokemon(): string {
  const number = Math.floor(Math.random() * 151) + 1;

  if (number < 10) {
    return `0${number}`;
  }

  return `${number}`;
}
