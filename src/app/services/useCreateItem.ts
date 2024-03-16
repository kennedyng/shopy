import { createItem } from "@/lib/server/item";
import React from "react";
import useSWRMutation from "swr/mutation";

const useCreateItem = () => {
  return useSWRMutation("create-item", createItem);
};

export default useCreateItem;
