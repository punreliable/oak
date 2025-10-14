import { queryOptions } from '@tanstack/react-query';
import axios from 'axios';

export const useKantoLocations = (url: string) =>
	queryOptions({
		queryKey: ['locations', 'inKanto'],
		queryFn: () => axios.get(url),
	});
