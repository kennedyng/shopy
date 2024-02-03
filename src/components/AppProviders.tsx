"use client";

import { SessionProvider } from "next-auth/react";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AppProviders: FC<Props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AppProviders;
