import React, { ChangeEvent, HtmlHTMLAttributes, useState } from "react";
import Input from "./reusable/Input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setListName, toggleActive } from "@/redux/features/listSlice";
import { toast } from "react-toastify";

const BottomSaveToList = () => {
  const { isActive } = useAppSelector((state) => state.listReducer);
  const dispatch = useAppDispatch();

  const list = useAppSelector((state) => state.listReducer.list);

  const [name, setName] = useState<string>("");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSaveList = () => {
    if (!name) {
      toast.warn("No Active List");
    }

    if (name !== "") {
      dispatch(toggleActive());
      dispatch(setListName({ listName: name }));
    }
  };

  const handleCancel = () => {
    alert(JSON.stringify(list));
  };

  const handleComplete = () => {
    alert(JSON.stringify(list));
    toast.info("working");
  };

  if (isActive) {
    return (
      <>
        <div className="absolute bottom-0 left-0 bg-white w-full h-[120px] flex justify-center items-center px-[39px]">
          <div className="flex flex-row gap-[39px]">
            <button
              onClick={handleCancel}
              className="text-base font-bold text-[#34333A]"
            >
              cancel
            </button>
            <button
              onClick={handleComplete}
              className="bg-[#56CCF2] text-base text-white h-[61px] w-[87px] rounded-[12px] text-md font-bold hover:bg-yellow-400  "
            >
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
