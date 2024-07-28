"use server";

import prisma from "@/lib/db";
import { CreateCateData } from "@/models/category/createCateData";

export async function createCategory(createCategoryData: CreateCateData) {
  const data = await prisma.category.create({
    data: {
      name: createCategoryData.name,
      owner: createCategoryData.userId,
    },
  });

  return data;
}
