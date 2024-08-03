"use client";

import { openItemDetailsDrawer } from "@/redux/features/drawerSlice";
import { addItemToCategory } from "@/redux/features/listSlice";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import ItemCard from "./ItemCard";

interface Item {
  id: string;
  name: string;
  note: string;
  imageUrl: string;
  categoryId: string;
}
interface Props {
  title: string;
  id: string;
  items: Item[];
}

const CategoryItems: React.FC<Props> = ({ title, items }) => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  const handleAddClick = () => {
    dispatch(openItemDetailsDrawer());
  };

  const handleLabelClick = (itemId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("selected_item", itemId);
    window.history.pushState(null, "", `?${params.toString()}`);
    dispatch(openItemDetailsDrawer());
  };

  const handleAddItem = (
    { categoryId, categoryName }: { categoryId: string; categoryName: string },
    ItemName: string
  ) => {
    dispatch(
      addItemToCategory({
        categoryId,
        categoryName,
        item: {
          name: ItemName,
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
            onLabelClick={() => handleLabelClick(String(id))}
            onAddClick={() =>
              handleAddItem({ categoryName: title, categoryId: id }, name)
            }
            label={name}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
