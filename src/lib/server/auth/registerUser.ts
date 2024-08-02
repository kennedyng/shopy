"use server";

import prisma from "@/lib/db";

import { z } from "zod";

// Define the validation schema
const schema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "The password must be at least 8 characters long" })
    .max(32, { message: "The password must be a maximum of 32 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, {
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
    }),
});

export interface FormState {
  message: string;
  ok: boolean;
}
export const registerUser = async (prevState: FormState, data: FormData) => {
  const { email, password } = Object.fromEntries(data) as {
    email: string;
    password: string;
  };

  const validatedFields = schema.safeParse({
    email,
    password,
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      ok: false,
      message: "make sure to submit collect info",
    };
  }

  const userExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userExist?.email) {
    return {
      message: "Email already taken",
      ok: false,
    };
  }
  await prisma?.user.create({
    data: {
      email,
      password,
    },
  });

  return {
    message: "successfully registered user",
    ok: true,
  };
};
