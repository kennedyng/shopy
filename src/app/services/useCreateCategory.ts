import { createCategory } from "@/lib/server/category/createCategory";
import { CreateCateData } from "@/models/category/createCateData";
import useSWRMutation from "swr/mutation";

const useCreateCategory = () => {
  return useSWRMutation(
    "create-category",
    (url, { arg }: { arg: CreateCateData }) => createCategory(arg)
  );
};

export default useCreateCategory;
