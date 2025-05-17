import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';
import prettyName from '@/utilities/prettyName';
import RegionPokedex from '../RegionPokedex/RegionPokedex';

const RegionsList = (regions: any) => {
	
	console.log('Regions List');

	const id = regions.url;
	const { data, error, isLoading } = useQuery({
    queryKey: ['regional-pokedex', id],
    queryFn: async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/region/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <Pending />;
  
  if (error) return <Error />;
  
  if(data) return (

    <section className='nesContainer nes-container'>
    <div>
      <h1>Regions</h1>
      {regions.map((region) => (
        <div key={region.name}> {/* Use region.name as key */}
          <h2>{prettyName(region.name)}</h2>
          {/* Pass the region's URL or name to the next component */}
          <RegionPokedex regionData={region} />
        </div>
      ))}
    </div>



      <Result pokedex={data} />
    </section>
  );
  
}

export default RegionsList;
