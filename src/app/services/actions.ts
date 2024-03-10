"use server";
import { z } from "zod";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
const schema = z.object({
  categoryName: z.string({
    invalid_type_error: "Invalid Name",
  }),
});
export async function createCategory(formData: FormData) {
  const sessions = await auth();
  const validatedFields = schema.safeParse({
    categoryName: formData.get("categoryName"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const data = await prisma.category.create({
    data: {
      owner: sessions?.user.id,
      name: validatedFields.data.categoryName,
    },
  });

  return data;
}
