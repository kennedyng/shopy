"use client";

import React, { FC, useState } from "react";
import { MdAdd, MdDelete, MdRemove } from "react-icons/md";

interface Props {
  editable?: boolean | true | false;
  label: string;
  pics: number | string;
  onAddPress: () => void;
  onSubtractPress: () => void;
  onDelete: () => void;
  onChange: (value: boolean) => void;
}

const ListItem: FC<Props> = ({
  editable = false,
  label,
  pics,
  onAddPress,
  onSubtractPress,
  onDelete,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [itemChecked, setItemChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemChecked(e.target.checked);
    onChange(e.target.checked);
  };

  const handleIncreament = () => {
    onAddPress();
  };
  const handleDecreament = () => {
    onSubtractPress();
  };

  const handleDelete = () => {
    onDelete();
  };
  return (
    <li className="flex flex-row gap-2 justify-between items-center duration-300">
      <div className="flex flex-row items-center gap-4">
        <input
          onChange={handleOnChange}
          type="checkbox"
          className={`outline-none ring- focus:outline-none focus:ring-0 border-primary-main h-[24px] w-[24px] accent-[#FFF0DE] ${
            editable ? "inline-block" : "hidden"
          }`}
        />
        <span
          className={`text-sm font-medium ${itemChecked && "line-through"}`}
        >
          {label}
        </span>
      </div>
      {!isOpen ? (
        <button
          onClick={handleToggle}
          className="border-primary-main border-[2px] rounded-full h-[32px] w-[68px] text-primary-main text-xs"
        >
          {pics}
        </button>
      ) : (
        <div className="bg-white rounded-xl w-[173px] h-[44px] flex flex-row justify-between gap-2 items-center">
          <button
            onClick={handleDelete}
            className="bg-primary-main h-full px-[9px] rounded-xl"
          >
            <MdDelete className="text-white" />
          </button>
          <div className="px-1 flex flex-row gap-2 items-center ">
            <button onClick={handleDecreament} className="text-primary-main ">
              <MdRemove />
            </button>
            <button
              onClick={handleToggle}
              className="border-primary-main border-2 rounded-full w-[68px] h-[32px] text-primary-main hover:bg-red-500 hover:text-white"
            >
              {pics}
            </button>
            <button onClick={handleIncreament} className="text-primary-main">
              <MdAdd />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default ListItem;
