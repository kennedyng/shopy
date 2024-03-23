"use server";
import { ItemType } from "@/app/@types";
import { auth } from "@/lib/auth";
import { revalidateTag } from "next/cache";

export const createItem = async (
  _: string,
  { arg }: { arg: ItemType }
): Promise<ItemType> => {
  const session = await auth();
  console.log("arg", arg);
  const res = await fetch(`${process.env.API_BASE_URL}/api/item/create`, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user.token}`,
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  revalidateTag("user-categories");
  return await res.json();
};
