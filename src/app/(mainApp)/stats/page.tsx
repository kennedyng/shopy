import React from "react";

import TopItemsAndCategroies from "./statsComponents/TopItemsAndCategroies";
import MonthlyLineChart from "./statsComponents/MonthlyLineChart";
const ticketsData = [
  ["Month", "items"],
  ["Jan", 80],
  ["Feb", 110],
  ["Mar", 60],
  ["Apr", 30],
  ["May", 20],
  ["Jun", 30],
  ["Jul", 30],
  ["Aug", 10],
];
const Page = () => {
  return (
    <div className="w-full py-[37px]">
      <TopItemsAndCategroies />
      <h1 className="text-2xl font-medium mt-[65px] mb-[41px]">
        Monthly Summary
      </h1>
      <MonthlyLineChart data={ticketsData} />
    </div>
  );
};

export default Page;
