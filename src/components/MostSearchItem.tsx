import Image from "next/image";
import React, {FC} from "react";
import Link from "next/link";

import {useGetBreedsImages} from "@/Hooks/useGetBreedImages";

interface MostSearchItemProps {
  id: string;
  name: string;
}

export const MostSearchItem: FC<MostSearchItemProps> = ({
  id,
  name,
}) => {
  const {data, isLoading} = useGetBreedsImages({breedId: id});

  return (
    <>
      {!isLoading && data ? (
        <Link href={`/breed/${id}`}>
          <div className="flex flex-col gap-2.5">
            <div className="relative w-full h-32 rounded-xl overflow-hidden">
              <Image
                priority
                alt="a cat image"
                height={300}
                placeholder="empty"
                src={data[0].url}
                width={300}
              />
            </div>
            <h2 className="text-xs font-semibold">{name}</h2>
          </div>
        </Link>
      ) : (
        <div className="h-32" />
      )}
    </>
  );
};
