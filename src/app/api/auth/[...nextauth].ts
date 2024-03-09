import CredentialsProvider from "next-auth/providers/credentials";

import NextAuth, { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
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
        const res = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        if (!res.ok) return null;
        return (await res.json()) ?? null;
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token = user as unknown as { [key: string]: any };
      console.log(token);

      return token;
    },
    session: async ({ session, token }) => {
      session.user = { ...token };
      return session;
    },
  },

  secret: process.env.JWT_SECRET as string,
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };