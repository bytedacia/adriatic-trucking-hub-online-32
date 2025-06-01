
import { useQuery } from '@tanstack/react-query';

interface TrucksBookCompany {
  id: number;
  name: string;
  members_count: number;
  online_members: number;
  distance: number;
  deliveries: number;
  logo: string;
  verified: boolean;
}

const fetchTrucksBookData = async (): Promise<TrucksBookCompany> => {
  const response = await fetch('https://api.trucksbook.eu/v2/company/207327');
  if (!response.ok) {
    throw new Error('Failed to fetch TrucksBook data');
  }
  return response.json();
};

export const useTrucksBookData = () => {
  return useQuery({
    queryKey: ['trucksbook-company', '207327'],
    queryFn: fetchTrucksBookData,
    refetchInterval: 5 * 60 * 1000, // Aggiorna ogni 5 minuti
    retry: 3,
  });
};
