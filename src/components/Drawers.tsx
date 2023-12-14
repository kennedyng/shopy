"use client";

import React from "react";
import ShoppingSidebar from "./ShoppingSidebar";
import ItemDetailSidebar from "./ItemDetailSidebar";
import NewItemSidebar from "./NewItemSidebar";
import { useAppSelector } from "@/redux/hooks";
import { drawerSelector } from "@/redux/features/drawerSlice";

const Drawers = () => {
  const { shoppingDrawerIsOpen, newItemDrawerIsOpen, itemDetailsDrawerIsOpen } =
    useAppSelector((state) => state.drawerReducer);
  return (
    <>
      <ShoppingSidebar open={shoppingDrawerIsOpen} />
      <ItemDetailSidebar open={itemDetailsDrawerIsOpen} />
      <NewItemSidebar open={newItemDrawerIsOpen} />
    </>
  );
};

export default Drawers;
