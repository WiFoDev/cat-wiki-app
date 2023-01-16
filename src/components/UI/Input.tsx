import Image from "next/image";

import searchIcon from "@/Assets/search.svg";

export const Input = () => {
  return (
    <>
      <input
        className="rounded-full placeholder:text-black placeholder:font-semibold text-xs outline-none py-2 pl-3 w-full"
        placeholder="Search"
        type="text"
      />
      <div className="w-3 h-3 absolute top-1 right-2.5">
        <Image alt="Search Icon" src={searchIcon} />
      </div>
    </>
  );
};
