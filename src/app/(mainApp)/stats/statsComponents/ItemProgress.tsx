import React, { FC } from "react";

export interface ItemPropsProps {
  percentage?: number;
  indicatorColor?: string;
  label: string;
}
const ItemProgress: FC<ItemPropsProps> = ({
  percentage = 0,
  indicatorColor = "blue",
  label,
}) => {
  return (
    <div className="flex flex-col gap-[14px]">
      <div className="flex flex-row justify-between items-center">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>

      <div className="w-full bg-[#E0E0E0] rounded h-[6px]">
        <div
          className={` h-full rounded   `}
          style={{ width: `${percentage}%`, backgroundColor: indicatorColor }}
        />
      </div>
    </div>
  );
};

export default ItemProgress;
