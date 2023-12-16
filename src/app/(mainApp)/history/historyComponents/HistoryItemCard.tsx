import React from "react";
import { MdCalendarMonth, MdArrowForward } from "react-icons/md";
const HistoryItemCard = () => (
  <div className="bg-white rounded-xl custom-shadow min-h-[63px] w-full flex flex-row items-center justify-between gap-2 py-2 px-[20px] cursor-pointer hover:-translate-y-2 duration-300">
    <span>Gocery</span>
    <div className="flex flex-row items-center gap-[26px]">
      <MdCalendarMonth className="text-[#C1C1C4]" />
      <span className="text-[#C1C1C4] text-xs font-medium">
        11 November 2022
      </span>
      <span className="h-[24px] border-[1px] border-[#56CCF2] rounded-[8px] px-[7px] text-xs font-medium  flex items-center justify-center text-[#56CCF2]">
        completed
      </span>

      <button>
        <MdArrowForward className="text-primary-main" />
      </button>
    </div>
  </div>
);
export default HistoryItemCard;
