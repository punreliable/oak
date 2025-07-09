import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Region {
  name: string;
  url: string;
}

interface RegionsData {
  [x: string]: any;
  region: Region[];
}

interface RegionsListProps {
  regions: RegionsData;
}

const RegionsList: React.FC<RegionsListProps> = ({ regions }) => {
  const content: any = [];
  const output = regions.map(
    (region: { key: number | string; name: React.Key | null | undefined; url: string }) =>
      content.push({ key: uuidv4(), name: region.name, url: region.url }),
  );

  console.log('Output: ', output);

  return (
    <section className='nesContainer nes-container'>
      <div>
        <h1>Pokémon Regions</h1>
        <h2>Coming Soon.</h2>
      </div>
    </section>
  );
};

export default RegionsList;
