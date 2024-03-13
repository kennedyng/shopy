"use server";

import { auth } from "@/lib/auth";

export const createItem = async (
  url: string,
  { arg }: { arg: any }
): Promise<any[]> => {
  const session = await auth();
  const res = await fetch(`${process.env.API_BASE_URL}/api/category`, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return await res.json();
};
