import React from "react";
import { MdArrowBack, MdCalendarMonth } from "react-icons/md";
import DetailsItemCard from "./detailsCompoents/DetailsItemCard";
const Page = () => {
  return (
    <main>
      <button className="flex flex-row gap-[2px] items-center text-primary-main mb-[35px]">
        <MdArrowBack /> <span className="text-xs font-semibold">back</span>
      </button>

      <h1 className="text-[#34333A] text-[26px] font-bold mb-[20px]">
        Eero's farewell party
      </h1>

      <div className="text-[#C1C1C4] flex flex-row gap-[10px] mb-[49px]">
        <MdCalendarMonth />
        <span className="text-xs font-medium">Mon 24 200</span>
      </div>

      <h5 className="text-lg font-medium mb-[18px]">Cookies</h5>

      <div className="flex flex-row gap-[19px]">
        <DetailsItemCard />
        <DetailsItemCard />
      </div>
    </main>
  );
};

export default Page;
