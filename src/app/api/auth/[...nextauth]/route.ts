import CredentialsProvider from "next-auth/providers/credentials";

import NextAuth, { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.username,
            password: credentials?.password,
          }),
        });

        if (res.ok) {
          return res.json();
        } else {
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET as string,
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
