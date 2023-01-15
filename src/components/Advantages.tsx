import React from "react";
import Image from "next/image";

import catImage1 from "@/Assets/image 1.png";
import catImage2 from "@/Assets/image 2.png";
import catImage3 from "@/Assets/image 3.png";

export const Advantages = () => {
  return (
    <section className="pt-10 flex flex-col gap-5">
      <hr className="w-14 border-2 border-background rounded-full" />
      <h2 className="text-4xl font-bold w-[98%]">
        Why should you have a cat?
      </h2>
      <p className="mt-2 text-lg font-medium">
        Having a cat around you can actually trigger the release of
        calming chemicals in your body which lower your stress and
        anxiety leves
      </p>
      <a className="font-bold text-xs text-secondary/60" href="#">
        READ MORE →
      </a>
      <div className="mt-4 columns-2 gap-5">
        <Image alt="A person hugging a cat" src={catImage2} />
        <div className="flex justify-end mt-3.5">
          <div className="w-[80%]">
            <Image
              alt="A person showing the claws of his cat"
              src={catImage1}
            />
          </div>
        </div>
        <Image alt="A cat in a yellow bag" src={catImage3} />
      </div>
    </section>
  );
};
