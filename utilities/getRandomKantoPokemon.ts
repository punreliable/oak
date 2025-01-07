import React from 'react';

export function getRandomKantoPokemon(): string {
  const number: number = Math.floor(Math.random() * 151) + 1;
  return `${number}`;
}
