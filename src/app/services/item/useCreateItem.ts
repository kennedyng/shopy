import { createItem } from "@/lib/server/item/createItem";
import { CreateCateData } from "@/models/category/createCateData";
import { CreateItemData } from "@/models/item/CreateItem";
import React from "react";
import useSWRMutation from "swr/mutation";

const useCreateItem = () => {
  return useSWRMutation("create-item", (_, { arg }: { arg: CreateItemData }) =>
    createItem(arg)
  );
};

export default useCreateItem;
