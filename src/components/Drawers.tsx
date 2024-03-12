"use client";

import { useAppSelector } from "@/redux/hooks";
import ItemDetailSidebar from "./ItemDetailSidebar";
import NewItemSidebar from "./NewItemSidebar";
import ShoppingSidebar from "./ShoppingSidebar";

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
