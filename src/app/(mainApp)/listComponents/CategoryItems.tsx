"use client";

import React from "react";
import ItemCard from "./ItemCard";
import { useDispatch } from "react-redux";
import { openItemDetailsDrawer } from "@/redux/features/drawerSlice";
import { addItemToCategory } from "@/redux/features/listSlice";

const CategoryItems = () => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(openItemDetailsDrawer());
  };

  const handleLabelClick = () => {
    console.log("Label clicked");
  };

  const handleAddItem = () => {
    console.log("add clicked");

    dispatch(
      addItemToCategory({
        categoryId: "4PqlIjxjDeI1yrPB6uKmdd",
        categoryName: "testing one beands",
        item: {
          name: "adding",
        },
      })
    );
  };

  return (
    <div>
      <h5 className="mb-[18px] text-lg font-medium">Fruit and vegetable</h5>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <ItemCard
          onLabelClick={handleAddClick}
          onAddClick={handleAddItem}
          label={"beans"}
        />
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
