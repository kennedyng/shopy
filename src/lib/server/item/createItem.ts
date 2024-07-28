"use server";
import { ItemType } from "@/app/@types";
import prisma from "@/lib/db";
import { CreateItemData } from "@/models/item/CreateItem";

export const createItem = async ({
  name,
  note,
  imageUrl,
  categoryId,
}: CreateItemData) => {
  Promise<ItemType>;

  const data = await prisma.item.create({
    data: {
      name,
      note,
      imageUrl,
      categoryId,
    },
  });

  return data;
};
