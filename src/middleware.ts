import { withAuth } from "next-auth/middleware";
import { pages } from "next/dist/build/templates/app-page";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {},
  {
    callbacks: {
      authorized: ({ token }) => (token ? true : false),
    },

    pages: {
      signIn: "/user/login",
      newUser: "/user/register",
    },
  }
);

export const config = { matcher: ["/", "/stats/:path*", "/history/:path*"] };
