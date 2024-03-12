import { NextRequest } from "next/server";
import { auth } from "./lib/auth";
import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";

export { default } from "next-auth/middleware";

export async function middleware(req: Request) {
  console.log("middleware");
}
