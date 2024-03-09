"use client";

import apiClient from "@/lib/axios";
import { SessionProvider } from "next-auth/react";
import React, { FC, ReactNode } from "react";
import { SWRConfig } from "swr/_internal";

interface Props {
  children: ReactNode;
}

const swrOptions = {
  fetcher: (url: string) => apiClient.get(url).then((res) => res.data), // Example: use axiosInstance for fetching
};
const AppProviders: FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <SWRConfig value={swrOptions}>{children}</SWRConfig>
    </SessionProvider>
  );
};

export default AppProviders;
