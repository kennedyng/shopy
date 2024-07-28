import { auth } from "@/lib/auth";

export const getItemDetails = async () => {
  const session = await auth();
  const res = await fetch(`${process.env.API_BASE_URL}/api/item`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user.token}`,
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
};
