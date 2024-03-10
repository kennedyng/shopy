import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getToken } from "next-auth/jwt";

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({ message: "Auth Failed" }, { status: 401 });
}
