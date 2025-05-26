// app/components/PokemonTile/PokemonTile.tsx (Example Structure)
'use client'; // Add this if it's a client component
import Image from 'next/image';

import React, { useEffect, useState } from 'react';
// Import any necessary types for Pokemon detail data
// import { PokemonDetail } from '../../types/pokemon';

export interface SinglePokemonData {
    name: string;
    url: string;
    // potentially other summary data
}

export interface TilePokemonProps {
  pokemon: SinglePokemonData;
}


const PokemonTile: React.FC<TilePokemonProps> = ( pokemon: SinglePokemonData ) => {
    const [pokemonDetail, setPokemonDetail] = useState<any | null>(null); // Use actual type
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemonDetail = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(pokemon.url);
                const detail = await response.json();
                setPokemonDetail(detail);
            } catch (err: any) {
                setError(err.message || 'Failed to fetch pokemon details.');
                setPokemonDetail(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonDetail();
    }, [pokemon.url]); // Re-run effect if pokemon URL changes

  return (
    <div className="pokemon-tile"> {/* Add a CSS class */}
      {loading && <p>Loading {pokemon.name}...</p>}
      {error && <p>Error loading {pokemon.name}: {error}</p>}
      {!loading && !error && pokemonDetail && (
        <>
            <h3>{pokemonDetail.name}</h3>
            {/* Example: Displaying the sprite */}
            {pokemonDetail.sprites?.front_default && (
                 <Image src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} />
            )}
            {/* Render other Pokemon details */}
        </>
      )}
       {!loading && !error && !pokemonDetail && <p>Details not available for {pokemon.name}</p>}
    </div>
  );
};

export default PokemonTile;