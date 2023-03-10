import Image from "next/image";
import {Dispatch, FC, SetStateAction} from "react";

import searchIcon from "@/Assets/search.svg";

interface InputProps {
  onClick?: () => void;
  width?: string;
  textSize?: string;
  fullSize?: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Input: FC<InputProps> = ({
  onClick,
  width,
  textSize,
  fullSize = true,
  value,
  setValue,
}) => {
  return (
    <label
      className={`relative mt-1 ${width ?? "w-full"} ${
        textSize ?? "text-lg"
      } font-semibold`}
      onClick={onClick}
    >
      <input
        className="rounded-full placeholder:text-black outline-none py-2 pl-4 w-full border-[1px] border-background"
        placeholder="Search"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        className={`absolute ${
          fullSize
            ? "w-5 h-5 top-3 right-4"
            : "w-3 h-3 top-2.5 right-2.5"
        }`}
      >
        <Image alt="Search Icon" src={searchIcon} />
      </div>
    </label>
  );
};
