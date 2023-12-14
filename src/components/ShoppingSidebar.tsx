import { sourceIcon } from "@/assets";
import Image from "next/image";
import React, { FC } from "react";
interface Props {
  open: boolean | true | false;
}
const ShoppingSidebar: FC<Props> = ({ open }) => {
  return (
    <aside
      className={`${
        open ? "translate-x-full" : "translate-x-0"
      } fixed  w-[calc(100%-61px)] h-screen top-0 right-0 bg-[#FFF0DE;] lg:w-[389px] py-[43px] px-[48px] duration-200`}
    >
      <div className="w-[308px] h-[129px] relative rounded-[24px] bg-[#80485B]">
        <Image
          src={sourceIcon}
          height={145}
          width={48}
          alt=""
          className="-rotate-6 w-[65px] h-[160px] absolute -top-11 left-2"
        />
        <div className="flex flex-col gap-2 absolute top-[17px] right-[20px]">
          <span className="text-sm font-bold text-white">
            Didn’t find what you need?
          </span>
          <button className="rounded-[12px] bg-white h-[40px] w-[120px] shadow-[0px_2px_12px_0px] hover:bg-gray-200">
            Add item
          </button>
        </div>
      </div>

      <h6 className="mt-[43px] mb-[39px] text-[#34333A] font-bold leading-normal text-lg">
        Shopping List
      </h6>
    </aside>
  );
};

export default ShoppingSidebar;
