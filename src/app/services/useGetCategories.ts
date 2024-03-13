import { fetchCategories } from "@/lib/server/category";
import useSWR, { SWRResponse } from "swr";

const useGetCategories = (): SWRResponse => {
  return useSWR("user-categories", fetchCategories);
};

export default useGetCategories;
