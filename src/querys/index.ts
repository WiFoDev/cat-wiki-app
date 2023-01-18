export const getBreeds = async () => {
  const data = await fetch(
    "https://api.thecatapi.com/v1/breeds",
  ).then((res) => res.json());

  return data;
};

interface QueryList {
  breed_ids?: string;
  limit?: number;
}

export const getCatImages = async (queryList: QueryList) => {
  const endpoint = new URL(
    "https://api.thecatapi.com/v1/images/search",
  );

  Object.entries(queryList).forEach(([key, value]) => {
    if (value) {
      endpoint.searchParams.append(key, value);
    }
  });

  const data = await fetch(endpoint.toString()).then((res) =>
    res.json(),
  );

  return data;
};
