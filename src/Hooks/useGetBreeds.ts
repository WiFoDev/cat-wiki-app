import {useQuery} from "@tanstack/react-query";

import {getBreeds} from "@/querys";

export interface Breed {
  id: string;
  name: string;
  affection_level: number;
}

export const useGetBreeds = () => {
  const {data, isLoading} = useQuery<Breed[]>({
    queryKey: ["breeds"],
    queryFn: getBreeds,
    staleTime: 1000 * 60 * 60 * 24,
    select: (data) =>
      data.map(({id, name, affection_level}: Breed) => ({
        id,
        name,
        affection_level,
      })),
  });

  return {data, isLoading};
};
