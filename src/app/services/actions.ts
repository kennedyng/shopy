"use server";
import { z } from "zod";

import { auth } from "@/lib/auth";
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

  const res = await fetch(`${process.env.API_BASE_URL}/category/create`, {
    method: "POST",
    body: JSON.stringify({ name: validatedFields.data.categoryName }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessions?.user.token}`,
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return await res.json();
}
