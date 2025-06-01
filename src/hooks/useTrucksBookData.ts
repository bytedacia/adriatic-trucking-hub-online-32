
import { useQuery } from '@tanstack/react-query';
import { fetchTrucksBookData, type TrucksBookCompany } from '../services/trucksBookProxy';

export const useTrucksBookData = () => {
  return useQuery({
    queryKey: ['trucksbook-company', '207327'],
    queryFn: fetchTrucksBookData,
    refetchInterval: 5 * 60 * 1000, // Aggiorna ogni 5 minuti
    retry: 3,
    staleTime: 2 * 60 * 1000, // Considera i dati validi per 2 minuti
  });
};

export type { TrucksBookCompany };
