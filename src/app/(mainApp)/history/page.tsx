import React from "react";
import HistoryItemCard from "./historyComponents/HistoryItemCard";

const Page = () => {
  return (
    <main>
      <h1 className="text-[#34333A] font-bold text-[24px] mb-[41px]">
        Shopping history
      </h1>

      <h6 className="text-xs font-medium mb-[17px]">August 2020</h6>
      <div className="flex flex-col gap-[28px]">
        <HistoryItemCard />
        <HistoryItemCard />
      </div>
    </main>
  );
};

export default Page;
