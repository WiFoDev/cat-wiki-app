import Image from "next/image";

import heroImage from "@/Assets/HeroImagesm.png";
import searchIcon from "@/Assets/search.svg";

export const Hero = () => {
  return (
    <section>
      <div className="relative overflow-hidden rounded-t-3xl">
        <div className="p-6 flex flex-col gap-2 w-1/2">
          <h1>CatWiki</h1>
          <p className="text-white text-[10px]">
            Get to know more about your cat breed
          </p>
          <label className="relative w-3/4 mt-1">
            <input
              className="rounded-full placeholder:text-black text-xs outline-none py-2 pl-3 w-full"
              placeholder="Search"
              type="text"
            />
            <div className="w-3 h-3 absolute top-1 right-2.5">
              <Image alt="Search Icon" src={searchIcon} />
            </div>
          </label>
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
  );
};
