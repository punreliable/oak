// app/components/RegionSection/RegionSection.tsx (Example Structure - Client Component using placeholder fetch)
'use client'; // Add this if it's a client component
import React from 'react';
import PokedexByRegion from '@/app/components/PokedexByRegion/PokedexByRegion';
import prettyName from '@/utilities/prettyName';
import { v4 as uuidv4 } from 'uuid';

interface RegionSectionProps {
  // Assuming 'data' is the prop that holds the array you want to map over
  data: PokemonNameUrl[]; // Using the PokemonNameUrl interface
  // Add other expected props here, e.g., the region name or url if needed separately
  regionName?: string; // Example: if the region name is also a prop
  regionUrl?: string; // Example: if the region url is also a prop
}

// Placeholder type for fetched Pokemon data for this example
interface RegionalPokemon {
    key: string;
    name: string;
    url: string; // URL to the specific pokemon data
    // maybe other regional data
}

export interface PokemonNameUrl {
  name: string;
  url: string;
}

const RegionSection: React.FC<RegionSectionProps> = ( props: RegionSectionProps ) => {

  console.log('RegionSection Loads');

  console.log('And here are the props: ', props);

  const data = props.data;

  console.log('Data: ', data);

  let count: number = props.data.length;

  return (
    <div className="region-section">
      
      {data.map( data => <PokedexByRegion key={uuidv4()} url={data.url} /> )}
      
    </div>
  );

};


export default RegionSection;
