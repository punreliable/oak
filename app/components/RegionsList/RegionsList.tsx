import React from 'react';
import RegionSection from '@/app/components/RegionSection/RegionSection';
import { v4 as uuidv4 } from 'uuid';

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

  console.log('so, I have an object with a property called regions, which is an array.');

  const content: any = [];
  const output = regions.map((region: { key: number | string; name: React.Key | null | undefined; url: string; }) => (
  content.push( {'key': uuidv4(), 'name': region.name, 'url': region.url })
  ));


  console.log('Output: ', output);
  console.log('Content: ', content);

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