import prisma from "@/lib/db";
import { NextResponse } from "next/server";

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
    return NextResponse.json({ token: "test" });
  }
}
