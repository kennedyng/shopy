import React from "react";

import TopItemsAndCategroies from "./statsComponents/TopItemsAndCategroies";
import MonthlyLineChart from "./statsComponents/MonthlyLineChart";
const ticketsData = [
  ["Day", "Sold Tickets"],
  ["Monday", 800],
  ["Tuesday", 110],
  ["Wedesday", 660],
  ["Thursday", 1030],
  ["Friday", 1030],
];
const Page = () => {
  return (
    <div>
      <TopItemsAndCategroies />
      <h1 className="text-2xl font-medium mt-[65px] mb-[41px]">
        Monthly Summary
      </h1>
      <MonthlyLineChart data={ticketsData} />
    </div>
  );
};

export default Page;
