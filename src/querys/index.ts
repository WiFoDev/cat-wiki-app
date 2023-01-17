export const getBreeds = async () => {
  const data = await fetch(
    "https://api.thecatapi.com/v1/breeds",
  ).then((res) => res.json());

  return data;
};
