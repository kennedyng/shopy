"use client";
import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FaHistory } from "react-icons/fa";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { logoIcon } from "@/assets";

const MENULINKS = [
  {
    icon: (
      <MdOutlineFormatListNumbered className="w-[20px] h-[16.25px] text-[#454545]" />
    ),
    to: "/",
  },
  {
    icon: <FaHistory className="w-[20px] h-[16.25px] text-[#454545]" />,
    to: "/history",
  },
  {
    icon: <GoGraph className="w-[20px] h-[16.25px] text-[#454545]" />,
    to: "/stats",
  },
];
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white w-[61px] max-w-[93px] py-[34px] flex flex-col justify-between h-screen">
      <Link href="/" className="self-center">
        <Image src={logoIcon} alt="logo" width={41} height={41} />
      </Link>
      <div className="w-full flex flex-col space-y-8">
        {MENULINKS.map(({ icon, to }, index) => (
          <Link
            href={to}
            className="flex flex-row items-center"
            key={"side-bar-" + index}
          >
            <span
              className={`inline-block h-[45px] w-[6px] rounded-r-[4px] duration-300 ${
                pathname === to ? "bg-primary-main" : "bg-white"
              }`}
            />
            <span className="mx-auto text-red-500">{icon}</span>
          </Link>
        ))}
      </div>
      <button className="relative self-center h-[42px] w-[42px] bg-primary-main flex justify-center items-center rounded-full">
        <span className="absolute -top-1 -right-1 bg-[#EB5757] text-white rounded-[4px] w-[20px] h-[19px] flex justify-center items-center font-bold">
          3
        </span>
        <MdShoppingCart className="h-[20px] w-[20px] text-white " />
      </button>
    </div>
  );
};

export default Sidebar;
