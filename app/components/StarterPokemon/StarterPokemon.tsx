import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';
import prettyName from '@/utilities/prettyName';

const Result = (props: { pokedex: { pokedexes: any;}} | any) => {

	// console.log('Result: ', props.pokedex);

	const listOfPokedexes = props.pokedex?.pokedexes;

	const regionName: string = props.pokedex?.name;
	// console.log('Your Region name is: ', regionName);

	let pokedexToQuery: string[] = [];
	const correctPokedex = listOfPokedexes.map(
		(
			pokedexes: { 
				name: string; 
				url: string; 
				pokedex: { 
					pokedexes: { 
						name: string; 
						url: string; 
					} 
				} 
			} 
		) => {
			if(regionName === pokedexes.name ) {
				pokedexToQuery.push(pokedexes.url);
			}
		}
	);

	const url = pokedexToQuery[0];

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokedexes', url],
    queryFn: async () => {
      const res = await axios.get(`${url}`);
      return res.data;
    },
  });
  
//   if (isLoading) return <Pending />;
//   if (isError) return <Error />;
//   if (data) return (
    <>
      <h1>{prettyName(data?.name)}</h1>
      {/* <Result key={uuidv4()} data={data.pokemon_entries} /> */}
    </>
//   );
};

export default Result;
