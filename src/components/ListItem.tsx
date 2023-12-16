"use client";

import React, { useState } from "react";
import { MdAdd, MdDelete } from "react-icons/md";
import { InputHTMLAttributes } from "react";

const ListItem = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [itemChecked, setItemChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemChecked(e.target.checked);
  };
  return (
    <li className="flex flex-row gap-2 justify-between items-center duration-300">
      <div className="flex flex-row items-center gap-4">
        <input
          onChange={handleOnChange}
          type="checkbox"
          className="outline-none ring- focus:outline-none focus:ring-0 border-primary-main h-[24px] w-[24px] accent-[#FFF0DE]"
        />
        <span
          className={`text-sm font-medium ${itemChecked && "line-through"}`}
        >
          Acocodo
        </span>
      </div>
      {isOpen ? (
        <button
          onClick={handleToggle}
          className="border-primary-main border-[2px] rounded-full h-[32px] w-[68px] text-primary-main text-xs"
        >
          3 pics
        </button>
      ) : (
        <div className="bg-white rounded-xl w-[173px] h-[44px] flex flex-row justify-between gap-2 items-center">
          <button className="bg-primary-main h-full px-[9px] rounded-xl">
            <MdDelete className="text-white" />
          </button>
          <div className="px-1 flex flex-row gap-2 items-center ">
            <button className="text-primary-main ">
              <MdAdd />
            </button>
            <button
              onClick={handleToggle}
              className="border-primary-main border-2 rounded-full w-[68px] h-[32px] text-primary-main hover:bg-red-500 hover:text-white"
            >
              3 pic
            </button>
            <button className="text-primary-main">
              <MdAdd />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default ListItem;
