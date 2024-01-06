import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const userExists = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (userExists?.email) {
    return NextResponse.json(
      { message: "account already exits!" },
      {
        status: 409,
      }
    );
  }

  const createdUserDatat = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },

    select: {
      email: true,
    },
  });

  return NextResponse.json(createdUserDatat);
}
