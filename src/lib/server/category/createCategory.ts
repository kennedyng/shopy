"use server";

import prisma from "@/lib/db";
import { auth } from "@/utils/auth";
import { ok } from "assert";
import { revalidatePath } from "next/cache";

export interface FormState {
  ok: boolean;
}
export async function createCategory(prevState: FormState, data: FormData) {
  try {
    const { name } = Object.fromEntries(data) as { name: string };
    const session = await auth();

    await prisma.category.create({
      data: {
        name,
        owner: session?.user.id,
      },
    });

    revalidatePath("/");
    return {
      ok: true,
    };
  } catch (error) {
    throw new Error("Faild to create category");
  }
}
