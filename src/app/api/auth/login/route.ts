import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const body = await req.json();
  const userExists = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!userExists) {
    return NextResponse.json({ message: "Auth Failed" }, { status: 401 });
  }

  if (userExists.password === body.password) {
    const accessToken = jwt.sign(
      {
        data: "foobar",
      },
      "secret",
      { expiresIn: 60 * 60 }
    );
    return NextResponse.json({ token: accessToken, email: userExists.email });
  }

  return NextResponse.json(
    { message: "something went wrong" },
    {
      status: 500,
    }
  );
}
