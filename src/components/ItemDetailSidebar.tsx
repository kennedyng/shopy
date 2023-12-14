import React, { FC } from "react";

interface Props {
  open: boolean;
}
const ItemDetailSidebar: FC<Props> = ({ open }) => {
  return (
    <aside
      className={`${
        open ? "translate-x-0" : "translate-x-full"
      } fixed w-[calc(100%-61px)] h-screen top-0 right-0 bg-red-50 lg:w-[389px] duration-200`}
    >
      Item Details
    </aside>
  );
};

export default ItemDetailSidebar;
