'use client'; // Add this if it's a client component
import React from 'react';
import PokedexByRegion from '@/app/components/PokedexByRegion/PokedexByRegion';
import { v4 as uuidv4 } from 'uuid';

interface RegionSectionProps {

  data: PokemonNameUrl[]; // Using the PokemonNameUrl interface
  regionName?: string; // Example: if the region name is also a prop
  regionUrl?: string; // Example: if the region url is also a prop
}
export interface PokemonNameUrl {
  name: string;
  url: string;
}

const RegionSection: React.FC<RegionSectionProps> = ( props: RegionSectionProps ) => {

  const data = props.data;

  return (
    <div className="region-section">
      {data.map( data => <PokedexByRegion key={uuidv4()} url={data.url} /> )}
    </div>
  );

};

export default RegionSection;
