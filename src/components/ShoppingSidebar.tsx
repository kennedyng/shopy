"use client";

import { sourceIcon } from "@/assets";
import Image from "next/image";
import React, { FC } from "react";
import BottomSaveToList from "./BottomSaveToList";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { openNewItemDrawer } from "@/redux/features/drawerSlice";
import { MdEdit } from "react-icons/md";
import ListItem from "./ListItem";
import {
  decreaseItemPcs,
  deleteItem,
  increaseItemPcs,
  toggleEdit,
} from "@/redux/features/listSlice";
interface Props {
  open: boolean | true | false;
}

interface Item {
  categoryId: string;
  itemId: string;
}
const ShoppingSidebar: FC<Props> = ({ open }) => {
  const dispatch = useAppDispatch();
  const {
    list,
    isEdit: isEditable,
    name,
  } = useAppSelector((state) => state.listReducer);

  const handleEditClick = () => {
    dispatch(toggleEdit());
  };
  const handleAddNewItemClick = () => {
    dispatch(openNewItemDrawer());
  };

  const handleIncreaseItemPcs = (data: Item) => {
    dispatch(increaseItemPcs(data));
  };
  const handleDecreamentPcs = (data: Item) => {
    dispatch(decreaseItemPcs(data));
  };

  const handleDeleteItem = (data: Item) => {
    dispatch(deleteItem(data));
  };

  let listContent = null;

  if (!name) {
    listContent = <div>Nothing </div>;
  }

  if (name) {
    listContent = (
      <div>
        <div className="mt-[43px] mb-[39px] flex flex-row justify-between items-center">
          <h6 className="text-[#34333A] font-bold leading-normal text-lg">
            {name}
          </h6>

          <button
            onClick={handleEditClick}
            className={`${isEditable ? "text-primary-main" : ""}`}
          >
            <MdEdit />
          </button>
        </div>
        {list.map(({ categoryInfo, items }) => (
          <div key={categoryInfo.id}>
            <span className="text-[#828282] text-sm font-medium">
              {categoryInfo.name}
            </span>
            <ul className="flex flex-col py-[25px] gap-[24px]">
              {items.map(({ name, id, pics }) => (
                <ListItem
                  key={id}
                  editable={isEditable}
                  pics={pics}
                  label={name}
                  onAddPress={() =>
                    handleIncreaseItemPcs({
                      categoryId: categoryInfo.id,
                      itemId: id as string,
                    })
                  }
                  onSubtractPress={() =>
                    handleDecreamentPcs({
                      categoryId: categoryInfo.id,
                      itemId: id as string,
                    })
                  }
                  onDelete={() =>
                    handleDeleteItem({
                      categoryId: categoryInfo.id,
                      itemId: id as string,
                    })
                  }
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <aside
      className={`${
        open ? "translate-x-0" : "translate-x-full"
      } fixed  w-[calc(100%-61px)] h-screen top-0 right-0 bg-[#FFF0DE;] lg:w-[389px] py-[43px] px-[48px] duration-200 `}
    >
      <div className="w-[308px] h-[129px] relative rounded-[24px] bg-[#80485B]">
        <Image
          src={sourceIcon}
          height={145}
          width={48}
          alt=""
          className="-rotate-6 w-[65px] h-[160px] absolute -top-11 left-2"
        />
        <div className="flex flex-col gap-2 absolute top-[17px] right-[20px]">
          <span className="text-sm font-bold text-white">
            Didn’t find what you need?
          </span>
          <button
            onClick={handleAddNewItemClick}
            className="rounded-[12px] bg-white h-[40px] w-[120px] custom-shadow hover:bg-gray-200"
          >
            Add item
          </button>
        </div>
      </div>

      {listContent}

      <BottomSaveToList />
    </aside>
  );
};

export default ShoppingSidebar;
