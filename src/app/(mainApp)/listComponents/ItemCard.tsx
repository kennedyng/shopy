import React, { FC } from "react";
import { MdAdd } from "react-icons/md";

interface Props {
  label: string | number;
  onAddClick?: () => void;
  onLabelClick?: () => void;
}
const ItemCard: FC<Props> = ({ label, onAddClick, onLabelClick }) => {
  return (
    <div className="bg-white rounded-xl py-[13px] px-[16px]  h-full flex flex-row items-baseline justify-between gap-[19px]   ">
      <p
        onClick={onLabelClick}
        className="text-base font-medium cursor-pointer hover:bg-slate-300 lowercase"
      >
        {label}
      </p>

      <button onClick={onAddClick}>
        <MdAdd className="text-[#C1C1C4]" />
      </button>
    </div>
  );
};

export default ItemCard;
