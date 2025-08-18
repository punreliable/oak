'use client';
import React from 'react';
// import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ErrorMove from './ErrorMove';
import PendingMove from './PendingMove';
import ResultMove from './ResultMove';

const MovePage = () => {
  const moveID = 'cut';
  const { data, error, isLoading } = useQuery({
    queryKey: ['move', moveID],
    queryFn: async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/move/${moveID}`);
      return response.data;
    },
  });

  if (isLoading) return <PendingMove />;
  if (error) return <ErrorMove />;
  if (data) return <ResultMove move={data} />;
};

export default MovePage;
