import React, {Dispatch, FC, SetStateAction} from "react";

import {Portal} from "@/HOC/Portal";
import {useGetBreeds} from "@/Hooks/useGetBreeds";

import {Input} from "./UI";

interface SearchModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const SearchModal: FC<SearchModalProps> = ({
  setIsModalOpen,
}) => {
  const {data, isLoading} = useGetBreeds();

  return (
    <Portal>
      {!isLoading ? (
        <div className="fixed inset-0 bg-white z-10 flex flex-col p-4 gap-7">
          <div
            className="w-10 h-10 bg-primary grid place-items-center p-3 rounded-md place-self-end"
            onClick={() => setIsModalOpen(false)}
          >
            <svg
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </div>
          <Input />
          <ul className="text-lg font-semibold overflow-scroll">
            {data &&
              data.map(({id, name}) => {
                return (
                  <li
                    key={id}
                    className="px-2 py-3 rounded-lg hover:bg-primary"
                  >
                    {name}
                  </li>
                );
              })}
          </ul>
        </div>
      ) : null}
    </Portal>
  );
};
