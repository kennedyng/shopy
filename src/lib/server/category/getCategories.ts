"use server";

import { CategoriesType } from "@/app/@types";
import { auth } from "@/lib/auth";

export const getCategories = async (): Promise<CategoriesType[]> => {
  return await [];
};
