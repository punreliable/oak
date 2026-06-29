import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useEvolutionChain = (url: string) =>
	useQuery({
		queryKey: ['evolution-chain', url],
		queryFn: () => axios.get(url),
		enabled: !!url,
	});

export default useEvolutionChain;
