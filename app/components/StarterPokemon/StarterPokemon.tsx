import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';

const Result = (props: { pokedex: { pokedexes: any;}} | any) => {

	console.log('Result: ', props.pokedex);

	const listOfPokedexes = props.pokedex.pokedexes;

	const regionName: string = props.pokedex?.name;
	console.log('Your Region name is: ', regionName);

	const pokedexToQuery: string[] = [];

	if(listOfPokedexes) { // Check if listOfPokedexes is defined
	// const correctPokedex = listOfPokedexes.map(
	// 	(
	// 		pokedexes: { 
	// 			name: string; 
	// 			url: string; 
	// 			pokedex: { 
	// 				pokedexes: { 
	// 					name: string; 
	// 					url: string; 
	// 				} 
	// 			} 
	// 		} 
	// 	) => {

	// 			pokedexToQuery.push(pokedexes.url);
			
	// 	}
	// );
}

	const url = pokedexToQuery[0];

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokedexes', url],
    queryFn: async () => {
      const res = await axios.get(`${url}`);
      return res.data;
    },
  });

  console.log('Pokedex Entries: ', data);
  
  if (isLoading) return <Pending />;
  if (isError) return <Error />;
  if (data) return (
    <>
      <h1>{data?.name}</h1>
    <Result data={data} />
    </>
  );
};

export default Result;
