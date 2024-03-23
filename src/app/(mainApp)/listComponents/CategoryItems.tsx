"use client";

import React, { FC } from "react";
import ItemCard from "./ItemCard";
import { useDispatch } from "react-redux";
import { openItemDetailsDrawer } from "@/redux/features/drawerSlice";
import { addItemToCategory } from "@/redux/features/listSlice";
import { ItemType } from "@/app/@types";

interface Props {
  title: string;
  items: ItemType[];
}
const CategoryItems: React.FC<Props> = ({ title, items }) => {
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
        categoryId: "4PqlIjxjDeI1yrPB6uKmfdd",
        categoryName: "testing one beands",
        item: {
          name: "adding",
          pics: 1,
          isCancelled: false,
        },
      })
    );
  };

  return (
    <div>
      <h5 className="mb-[18px] text-lg font-medium">{title}</h5>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {items.map(({ id, name }) => (
          <ItemCard
            key={id}
            onLabelClick={handleAddClick}
            onAddClick={handleAddItem}
            label={name}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
