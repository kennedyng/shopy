import Input from "@/components/ui/Input";
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import CategoryItems from "./listComponents/CategoryItems";
export default function Home() {
  return (
    <main>
      <div className="hidden  flex-row gap-2 justify-between lg:flex">
        <h4 className="text-[#34333A] text-[26px] font-medium">
          <span className="text-primary-main">Shoppingify</span> allows you take
          your <br /> shopping list wherever you go
        </h4>

        <div className="rounded-xl custom-shadow bg-white w-[275px] h-[50px] px-4 py-[13px] gap-[19px] flex flex-row">
          <MdSearch className="h-[26px] w-[26px]" />
          <input
            type="search"
            placeholder="Search"
            className="w-full outline-none ring-0 focus:ring-0 focus:outline-none"
          />
        </div>
      </div>

      <div className="my-[57px]">
        <CategoryItems />
        <div className="inline-block h-[61px] w-full" />

        <CategoryItems />
        <div className="inline-block h-[61px] w-full" />

        <CategoryItems />
      </div>
    </main>
  );
}
