import React, {FC} from "react";

import {Breed} from "@/Hooks/useGetBreeds";

import {BreedItem} from "./BreedItem";

interface BreedListProps {
  data: Breed[];
}

export const BreedList: FC<BreedListProps> = ({data}) => {
  return (
    <>
      {data.length > 0 ? (
        <ul className="text-lg font-semibold overflow-scroll">
          {data &&
            data.map((breed) => {
              return <BreedItem key={breed.id} breed={breed} />;
            })}
        </ul>
      ) : (
        <p className="text-lg font-semibold p-2">No Results Found</p>
      )}
    </>
  );
};
