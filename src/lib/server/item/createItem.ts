"use server";
import prisma from "@/lib/db";
import { CreateItemData } from "@/models/item/CreateItem";

export interface FormState {
  message: string;
}
export const createItem = async (prevState: FormState, data: FormData) => {
  try {
    const { name, note, categoryId, imageUrl } = Object.fromEntries(
      data
    ) as CreateItemData;

    const created = await prisma.item.create({
      data: {
        name,
        note,
        categoryId,
        imageUrl,
      },
    });

    return {
      message: "Item Created",
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed ");
  }
};
