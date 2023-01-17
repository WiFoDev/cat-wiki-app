import {useQuery} from "@tanstack/react-query";

import {getBreeds} from "@/querys";

interface Breed {
  id: string;
  name: string;
}

export const useGetBreeds = () => {
  const {data, isLoading} = useQuery<Breed[]>({
    queryKey: ["breeds"],
    queryFn: getBreeds,
    staleTime: 1000 * 60 * 60 * 24,
    select: (data) =>
      data.map((breed: Breed) => ({
        id: breed.id,
        name: breed.name,
      })),
  });

  return {data, isLoading};
};
