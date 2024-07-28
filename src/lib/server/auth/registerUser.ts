"use server";

import { UserCredentials } from "@/models";
import prisma from "@/lib/db";
export const registerUser = async (
  _: string,
  { arg }: { arg: UserCredentials }
) => {
  const { email, password } = arg;

  const userExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userExist?.email) {
    throw new Error("Email already taken");
  }
  const user = await prisma?.user.create({
    data: {
      email,
      password,
    },
  });

  console.log(user);
  return user;
};
