import prisma from "@/lib/db";
import { UnAuthorizedExeception } from "@/lib/execeptions/UnAuthorizedExeception";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (user?.password === credentials?.password) {
          return user;
        } else {
          throw new UnAuthorizedExeception(
            "Auth failed: Wrong User Credentials"
          );
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token = user as unknown as { [key: string]: any };
      return token;
    },
    session: async ({ session, token }) => {
      session.user = { ...token };
      return session;
    },
  },

  pages: {
    signIn: "/user/login",
    newUser: "/user/register",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
