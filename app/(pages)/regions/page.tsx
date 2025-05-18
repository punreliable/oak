"use client";
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from './Error';
import Pending from './Pending';
import Result from './Result';
import RegionsList from '../../components/RegionsList/RegionsList';

const RegionsPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['regions'],
    queryFn: async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/region`);
      return response.data.results;
    },
  });

  if (isLoading) return <Pending />;
  if (error) return <Error />;
  if (data) return (
    <div className='App'>
      <section className='nesContainer nes-container'>{data && <RegionsList regions={data} />}</section>
    </div>
  );
};

export default RegionsPage;
