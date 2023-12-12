import React from "react";

import TopItemsAndCategroies from "./statsComponents/TopItemsAndCategroies";
import MonthlyLineChart from "./statsComponents/MonthlyLineChart";

const Page = () => {
  return (
    <div>
      <TopItemsAndCategroies />
      <h1 className="text-2xl font-medium mt-[65px] mb-[41px]">
        Monthly Summary
      </h1>
      <MonthlyLineChart />
    </div>
  );

};

export default Page;
