//  "use client";
import {useQuery} from '@tanstack/react-query';
import { LocationAreaEncounter } from '@/types/locationAreaEncounter';
import axios from 'axios';

export const usePLAE = (url: string) => useQuery({
	queryKey: ['locations'],
	queryFn: () => axios.get(url)
});
