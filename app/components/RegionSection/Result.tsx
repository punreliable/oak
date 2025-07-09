import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';

const Result = (props: any) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokedexes', props.pokedex.pokedexes[0].url],
    queryFn: async () => {
      const res = await axios.get(`${props.pokedex.pokedexes[0].url}`);
      return res.data;
    },
  });

  if (isLoading) return <Pending />;
  if (isError) return <Error />;
  if (data) return <h1>Coming Soon.</h1>;
};

export default Result;
