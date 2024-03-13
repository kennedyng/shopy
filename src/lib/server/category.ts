"use server";

import { auth } from "@/lib/auth";

export const fetchCategories = async (): Promise<any[]> => {
  const session = await auth();
  const res = await fetch(`${process.env.API_BASE_URL}/api/category`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return await res.json();
};
