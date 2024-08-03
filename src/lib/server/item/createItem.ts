"use server";
import prisma from "@/lib/db";
import { CreateItemData } from "@/models/item/CreateItem";
import { revalidatePath } from "next/cache";

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

    revalidatePath("/");
    return {
      message: "Item Created",
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed ");
  }
};
