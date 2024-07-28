import { MdSearch } from "react-icons/md";
import CategoryItems from "./listComponents/CategoryItems";
import { fetchCategories } from "@/lib/server/category";

export default async function Home() {
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

      {/* {[]?.map(({ id, name, items }) => (
        <div key={id} className="my-[57px]">
          <CategoryItems title={name} items={items} />
        </div>
      ))} */}
    </main>
  );
}
