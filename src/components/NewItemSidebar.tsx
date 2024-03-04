import React, { FC } from "react";
import Input from "./reusable/Input";
import TextArea from "./reusable/TextArea";
interface Props {
  open: boolean | true | false;
}
const NewItemSidebar: FC<Props> = ({ open }) => {
  return (
    <aside
      className={`${
        open ? "translate-x-0" : "translate-x-full"
      } fixed w-[calc(100%-61px)] bg-[#FAFAFE] h-screen top-0 right-0 px-[40px] py-[34px] lg:w-[389px] duration-200`}
    >
      <h4 className="mb-[33px] text-lg font-medium">Add a new item</h4>

      <form className="flex flex-col gap-[18px]">
        <div>
          <label
            htmlFor="name"
            className="mb-[6px] text-sm font-medium text-[#34333A]"
          >
            Name
          </label>
          <Input
            id="name"
            placeholder="Enter a name"
            className="border-[#BDBDBD] focus:border-primary-main text-sm h-[58px] px-[17px]"
          />
        </div>

        <div>
          <label
            htmlFor="note"
            className="mb-[6px] text-sm font-medium text-[#34333A]"
          >
            Note (optional)
          </label>
          <TextArea
            id="note"
            placeholder="Enter a name"
            className="border-[#BDBDBD] focus:border-primary-main h-[110px] text-sm  px-[17px]"
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="mb-[6px] text-sm font-medium text-[#34333A]"
          >
            Image (opotional)
          </label>
          <Input
            id="image"
            placeholder="Enter a url"
            className="border-[#BDBDBD] focus:border-primary-main text-sm h-[58px] px-[17px]"
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="mb-[6px] text-sm font-medium text-[#34333A]"
          >
            Category
          </label>
          <Input
            id="name"
            placeholder="Enter a name"
            className="border-[#BDBDBD] focus:border-primary-main text-sm h-[58px] px-[17px]"
          />
        </div>

        <div className="flex justify-center">
          <div className="flex flex-row gap-[18px]">
            <button>cancel</button>
            <button className="bg-primary-main text-white rounded-xl font-bold h-[61px] w-[87px]">
              Save
            </button>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default NewItemSidebar;
