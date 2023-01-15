import React from "react";
import Image from "next/image";

import catImage from "@/Assets/image 1.png";

export const MostSearch = () => {
  return (
    <section className="bg-primary px-7 py-4 flex flex-col gap-4 rounded-b-3xl">
      <div>
        <p className="text-xs">Most Searched Breeds</p>
        <hr className="w-10 border-2 border-background rounded-full mt-1" />
      </div>
      <h2 className="text-lg font-bold w-2/3">
        66+ Breeds For you to discover
      </h2>
      <div className="grid grid-cols-2 gap-5 mt-2 mb-4">
        <div className="flex flex-col gap-2.5">
          <Image alt="a cat image" src={catImage} />
          <h2 className="text-xs font-semibold">Bengal</h2>
        </div>
        <div className="flex flex-col gap-2.5">
          <Image alt="a cat image" src={catImage} />
          <h2 className="text-xs font-semibold">Bengal</h2>
        </div>
        <div className="flex flex-col gap-2.5">
          <Image alt="a cat image" src={catImage} />
          <h2 className="text-xs font-semibold">Bengal</h2>
        </div>
        <div className="flex flex-col gap-2.5">
          <Image alt="a cat image" src={catImage} />
          <h2 className="text-xs font-semibold">Bengal</h2>
        </div>
      </div>
    </section>
  );
};
