import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const usePokemonSpeciesDataByID = (url: string) =>
	useQuery({
		queryKey: ['species'],
		queryFn: () => axios.get(url),
	});
