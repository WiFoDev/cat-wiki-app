import React, {FC} from "react";

import {Breed} from "@/Hooks/useGetBreeds";

interface BreedItemProps {
  breed: Breed;
}

export const BreedItem: FC<BreedItemProps> = ({
  breed: {id, name},
}) => {
  return (
    <li key={id} className="px-2 py-3 rounded-lg hover:bg-primary">
      {name}
    </li>
  );
};
