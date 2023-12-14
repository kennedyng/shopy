"use client";

import React from "react";
import ItemCard from "./ItemCard";
import { useDispatch } from "react-redux";
import { openItemDetailsDrawer } from "@/redux/features/drawerSlice";

const CategoryItems = () => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(openItemDetailsDrawer());
  };

  const handleLabelClick = () => {
    console.log("Label clicked");
  };
  return (
    <div>
      <h5 className="mb-[18px] text-lg font-medium">Fruit and vegetable</h5>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <ItemCard onLabelClick={handleAddClick} label={"beans"} />
        <ItemCard label={"banana"} />
        <ItemCard label={"soya"} />
        <ItemCard label={"beans"} />
        <ItemCard label={"beans"} />
        <ItemCard label={"soya"} />
        <ItemCard label={"beans"} />
        <ItemCard label={"beans"} />
      </div>
    </div>
  );
};

export default CategoryItems;
