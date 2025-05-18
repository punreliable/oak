import React from 'react';
// Removed useQuery and axios imports as data is passed via props
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

import Error from './Error';
import Pending from './Pending';
import Result from './Result';
import prettyName from '@/utilities/prettyName';
import RegionPokedex from '../RegionPokedex/RegionPokedex';
import { RegionsListProps } from '@/interfaces/regions';

const RegionsList = ( regions: RegionsListProps ) => {

	// console.log('Made it to Regions List');

  // Assuming regions array is provided directly as a prop
  // No need for useQuery hook here if the list of regions is passed in

  // Render the list of regions
  return (
    <section className='nesContainer nes-container'>
      <div>
        <h1>Regions</h1>
        {regions.regions.map((region) => (
          // Use region.name as key if it's unique, otherwise consider region.id
          <div key={region.name}>
            <h2>{prettyName(region.name)}</h2>
            <Result regionData={region} /> 
          </div>
            ))}
      </div>
      {/* The Result component usage here seems incorrect based on the data structure.
          If Result is meant to display details for a single pokedex, you might need
          to iterate through region.pokedexes and render a Result for each, or
          pass specific pokedex data to it.
          For now, I'm commenting it out as its purpose with the current prop structure is unclear.
      */}
    </section>
  );
}

export default RegionsList;