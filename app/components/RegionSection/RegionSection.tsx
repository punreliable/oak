// app/components/RegionSection/RegionSection.tsx (Example Structure - Client Component using placeholder fetch)
'use client'; // Add this if it's a client component
import React from 'react';
import TilePokemon from '../PokemonTile/PokemonTile';
import prettyName from '@/utilities/prettyName';

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

  return (
    <div className="region-section">
      <h2>{prettyName(props.data[0].name)}</h2>
      <h3>{props.data[0].url}</h3>

      <h2>{prettyName(props.data[1].name)}</h2>
      <h3>{props.data[1].url}</h3>
      
      <h2>{prettyName(props.data[2].name)}</h2>
      <h3>{props.data[2].url}</h3>

      <h2>{prettyName(props.data[3].name)}</h2>
      <h3>{props.data[3].url}</h3>
      
      <h2>{prettyName(props.data[4].name)}</h2>
      <h3>{props.data[4].url}</h3>

      <h2>{prettyName(props.data[5].name)}</h2>
      <h3>{props.data[5].url}</h3>

      <h2>{prettyName(props.data[6].name)}</h2>
      <h3>{props.data[6].url}</h3>

      <h2>{prettyName(props.data[7].name)}</h2>
      <h3>{props.data[7].url}</h3>

      <h2>{prettyName(props.data[8].name)}</h2>
      <h3>{props.data[8].url}</h3>

      <h2>{prettyName(props.data[9].name)}</h2>
      <h3>{props.data[9].url}</h3>

    </div>
  );
};

export default RegionSection;
