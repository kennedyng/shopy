import { getCategories } from "@/lib/server/category/getCategories";
import useSWR from "swr";

const useGetCategories = () => {
  return useSWR("user-categories", getCategories);
};

export default useGetCategories;
