"use server";
import prisma from "@/lib/db";
import { auth } from "@/utils/auth";

export const getCategories = async () => {
  const session = await auth();
  const categories = await prisma.category.findMany({
    include: {
      items: true,
    },
    where: {
      owner: session?.user.id,
    },
  });

  return categories;
};
