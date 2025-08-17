'use client';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ErrorMove from './ErrorMove';
import PendingMove from './PendingMove';
import Result from './ResultMove';

interface MovePageProps {
  moveID: string; // Define the type of the prop
}

const MovePage = ({moveID}: MovePageProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const { data, error, isLoading } = useQuery({
    queryKey: ['ability', moveID],
    queryFn: async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/move/${moveID}`);
      return response.data;
    },
  });
  if (!isClient) {
    return null;
  }
  if (isLoading) return <PendingMove />;

  if (error) return <ErrorMove />;

  return (
    <div className='App'>
      <section className='nesContainer nes-container'>{data && <Result move={data} />}</section>
    </div>
  );
};

export default MovePage;
