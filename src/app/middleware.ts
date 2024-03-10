import { NextRequest } from "next/server";

export { default } from "next-auth/middleware";

export function middleware(request: NextRequest) {
  console.log("middleware");
}
export const config = { matcher: ["/"] };
