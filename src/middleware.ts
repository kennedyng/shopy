import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    //next auth middleware
  },
  {
    callbacks: {
      authorized: ({ token }) => (token ? true : false),
    },
    pages: {
      signIn: "/",
      error: "/error",
    },
  }
);

export const config = { matcher: ["/dashboard/:path*"] };
