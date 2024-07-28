import { getCategories } from "@/lib/server/category/getCategories";
import useSWR, { SWRResponse } from "swr";

const useGetCategories = (): SWRResponse => {
  return useSWR("user-categories", getCategories);
};

export default useGetCategories;
