"use server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

export const getCategories = async () => {
  const session = await auth();
  const categories = await prisma.category.findMany({
    where: {
      owner: session?.user.id,
    },
  });

  return categories;
};
