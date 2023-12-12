import React from "react";
import ItemProgress from "./ItemProgress";

const TopItemsAndCategroies = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[65px]">
      <div>
        <h1 className="font-medium text-2xl mb-[32px]">Top Items</h1>

        <div className="flex flex-col gap-[49px]">
          <ItemProgress
            label="bananane"
            indicatorColor="#F9A109"
            percentage={90}
          />
          <ItemProgress
            label="bananane"
            indicatorColor="#F9A109"
            percentage={20}
          />
          <ItemProgress
            label="bananane"
            indicatorColor="#F9A109"
            percentage={50}
          />
        </div>
      </div>
      <div>
        <h1 className="font-medium text-2xl mb-[32px]">Top Categories</h1>
        <div className="flex flex-col gap-[49px]">
          <ItemProgress
            label="bananane"
            indicatorColor="#56CCF2"
            percentage={50}
          />
          <ItemProgress
            label="bananane"
            indicatorColor="#56CCF2"
            percentage={50}
          />
          <ItemProgress
            label="bananane"
            indicatorColor="#56CCF2"
            percentage={50}
          />
        </div>
      </div>
    </div>
  );
};

export default TopItemsAndCategroies;
