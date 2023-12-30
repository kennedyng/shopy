import React, { ChangeEvent, HtmlHTMLAttributes, useState } from "react";
import Input from "./ui/Input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setListName, toggleActive } from "@/redux/features/listSlice";

const BottomSaveToList = () => {
  const { isActive } = useAppSelector((state) => state.listReducer);
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>("");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSaveList = () => {
    dispatch(toggleActive());

    if (name !== "") {
      dispatch(setListName({ listName: name }));
    }
  };

  if (isActive) {
    return (
      <>
        <div className="absolute bottom-0 left-0 bg-white w-full h-[120px] flex justify-center items-center px-[39px]">
          <div className="flex flex-row gap-[39px]">
            <button className="text-base font-bold text-[#34333A]">
              cancel
            </button>
            <button className="bg-[#56CCF2] text-base text-white h-[61px] w-[87px] rounded-[12px] text-md font-bold hover:bg-yellow-400  ">
              Complete
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="absolute bottom-0 left-0 bg-white w-full h-[120px] flex justify-center items-center px-[39px]">
      <div className="w-full relative">
        <Input
          onChange={handleOnChange}
          placeholder="Enter a name"
          className="h-[61px] text-md font-normal text-center pr-[90px]"
        />
        <button
          onClick={handleSaveList}
          className="absolute right-0 bg-primary-main text-white h-[61px] w-[87px] rounded-[12px] text-md font-bold hover:bg-yellow-400  "
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default BottomSaveToList;
