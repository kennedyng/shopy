import React from "react";
import { MdArrowBack } from "react-icons/md";
const Page = () => {
  return (
    <main>
      <button className="flex flex-row gap-[2px] items-center text-primary-main mb-[35px]">
        <MdArrowBack /> <span className="text-xs font-semibold">back</span>
      </button>
    </main>
  );
};

export default Page;
