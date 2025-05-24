import React from 'react';
import RegionSection from '@/app/components/RegionSection/RegionSection';
import { v4 as uuidv4 } from 'uuid';
// Removed useQuery and axios imports as data is passed via props
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

import Error from './Error';
import Pending from './Pending';
import Result from './Result';
import prettyName from '@/utilities/prettyName';

// import { RegionsListProps } from '@/interfaces/regions';
interface Region {
  name: string;
  url: string;
}

interface RegionsData {
  [x: string]: any;
  region: Region[];
  // other properties might exist
}

interface RegionsListProps {
  regions: RegionsData;
}

const RegionsList: React.FC<RegionsListProps> = ({ regions }) => {


	console.log('Made it to Regions List');

  console.log('Regions: ', regions);

  // const regionsList: RegionsListProps = regions;

  // console.log('Regions List: ', regionsList);

  // console.log('Regions List Length: ', regionsList.region.length );

  console.log('so, I have an object with a property called regions, which is an array.');

  let content: any = [];
  const output = regions.map((region: { key: number | string; name: React.Key | null | undefined; url: string; }) => (
  content.push( {'key': uuidv4(), 'name': region.name, 'url': region.url })
  ));


  console.log('Content: ', content);

  // Render the list of regions
  return (
    <section className='nesContainer nes-container'>

    <div>
      <h1>Pokémon Regions</h1>
        <RegionSection data={content} />
    </div>

    </section>
  );
}

export default RegionsList;