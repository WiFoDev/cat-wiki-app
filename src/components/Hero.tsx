import Image from "next/image";
import {useState} from "react";

import heroImage from "@/Assets/HeroImagesm.png";

import {SearchModal} from "./SearchModal";
import {Input} from "./UI";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && <SearchModal setIsModalOpen={setIsModalOpen} />}
      <section>
        <div className="relative overflow-hidden rounded-t-3xl">
          <div className="px-6 py-5 flex flex-col gap-2 w-1/2">
            <h1>CatWiki</h1>
            <p className="text-white text-[10px]">
              Get to know more about your cat breed
            </p>
            <Input
              fullSize={false}
              textSize="text-xs"
              width="w-[80%]"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
          <div className="absolute inset-0 -z-10">
            <div className="">
              <Image
                alt="A cat looking for something"
                src={heroImage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
