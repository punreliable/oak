'use client';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';

const getBerryNumber = () => {
  const number = Math.floor(Math.random() * 63) + 1;
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
};

const BerryPage = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const { data, error, isLoading } = useQuery({
    queryKey: ['berry'],
    queryFn: async () => {
      const id = getBerryNumber();
      const response = await axios.get(`https://pokeapi.co/api/v2/berry/${id}`);
      return response.data;
    },
  });

  if (!isClient) {
    return null;
  }

  if (isLoading) return <Pending />;

  if (error) return <Error />;

  return (
    <div className='App'>
      <section className='nesContainer nes-container'>{data && <Result berry={data} />}</section>
    </div>
  );
};

export default BerryPage;
