import {useQuery} from "@tanstack/react-query";

import {getCatImages} from "@/querys";

interface BreedQueryParams {
  breedId: string;
  limit?: number;
}

interface BreedImage {
  id: string;
  url: string;
}

export const useGetBreedsImages = ({
  breedId,
  limit,
}: BreedQueryParams) => {
  const {data, isLoading} = useQuery<BreedImage[]>({
    queryKey: ["breedImages", breedId],
    queryFn: () => getCatImages({breed_ids: breedId, limit}),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {data, isLoading};
};
