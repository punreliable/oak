import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const usePLAE = (url: string) =>
	useQuery({
		queryKey: ['locations'],
		queryFn: () => axios.get(url),
	});
