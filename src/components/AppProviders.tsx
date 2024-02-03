"use client";

import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AppProviders: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default AppProviders;
