import React, { FC } from "react";
interface Props {
  open: boolean | true | false;
}
const NewItemSidebar: FC<Props> = ({ open }) => {
  return (
    <aside
      className={`${
        open ? "translate-x-full" : "translate-x-0"
      } fixed w-[calc(100%-61px)] h-screen top-0 right-0 bg-red-50 lg:w-[389px] duration-200`}
    >
      New Item
    </aside>
  );
};

export default NewItemSidebar;
