import React, {useMemo} from "react";

import {useGetBreeds} from "@/Hooks/useGetBreeds";

import {MostSearchItem} from "./MostSearchItem";

export const MostSearch = () => {
  const {data} = useGetBreeds();

  const fourMostSearched = useMemo(() => {
    if (data) {
      const draft = [...data];

      draft.sort((a, b) => b.affection_level - a.affection_level);

      return draft.slice(0, 4);
    }
  }, [data]);

  return (
    <section className="bg-primary px-7 py-4 flex flex-col gap-4 rounded-b-3xl">
      <div>
        <p className="text-xs">Most Searched Breeds</p>
        <hr className="w-10 border-2 border-background rounded-full mt-1" />
      </div>
      <h2 className="text-lg font-bold w-2/3">
        66+ Breeds For you to discover
      </h2>
      <ul className="grid grid-cols-2 gap-5 mt-2 mb-4">
        {fourMostSearched &&
          fourMostSearched.map((breed) => (
            <MostSearchItem key={breed.id} {...breed} />
          ))}
      </ul>
    </section>
  );
};
