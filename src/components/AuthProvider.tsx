"use client";

import { SessionProvider } from "next-auth/react";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const AuthProvider: FC<Props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
