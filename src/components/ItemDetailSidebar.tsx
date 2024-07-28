import { closeItemDetailsDrawer } from "@/redux/features/drawerSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FC } from "react";
import { MdArrowBack } from "react-icons/md";

interface Props {
  open: boolean;
}
const ItemDetailSidebar: FC<Props> = async ({ open }) => {
  const dispatch = useAppDispatch();
  const handleBackClick = () => {
    dispatch(closeItemDetailsDrawer());
  };
  return (
    <aside
      className={`${
        open ? "translate-x-0" : "translate-x-full"
      } fixed overflow-y-auto w-[calc(100%-61px)] h-screen top-0 right-0 bg-[#FFF] py-[27px] px-[44px] lg:w-[389px] duration-200`}
    >
      <button
        onClick={handleBackClick}
        className="group flex flex-row items-center text-primary-main gap-2"
      >
        <span className="group-hover:rotate-180 group-hover:text-red-500 duration-300">
          <MdArrowBack />
        </span>
        <span className="text-sm font-bold ">back</span>
      </button>

      <div className="bg-gray-200 rounded-[25px] h-[219px] text-center mt-[39px] mb-[53px]">
        Image
      </div>

      <span className="text-[#C1C1C4] text-xs font-medium">name</span>
      <h2 className="mt-[11px] mb-[33px] text-2xl font-medium">Avacoda</h2>
      <span className="text-[#C1C1C4] text-xs font-medium">Category</span>
      <h4 className="mt-[11px] mb-[33px] text-lg font-medium">
        Fruit and vegetables
      </h4>
      <span className="text-[#C1C1C4] text-xs font-medium">note</span>
      <p className="mt-[11px] text-lg">
        Nutrient-dense foods are those that provide substantial amounts of
        vitamins, minerals and other nutrients with relatively few calories.
        One-third of a medium avocado (50 g) has 80 calories and contributes
        nearly 20 vitamins and minerals, making it a great nutrient-dense food
        choice.{" "}
      </p>

      <div className="py-[34px] flex justify-center items-center">
        <div className="flex flex-row gap-[44px]">
          <button className="text-base font-bold text-[#34333A]">delete</button>
          <button className="bg-primary-main rounded-xl h-[61px] w-[123px] text-white text-base font-bold">
            Add to list
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ItemDetailSidebar;
