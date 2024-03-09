"use client";

import apiClient from "@/lib/axios";
import { SessionProvider } from "next-auth/react";
import React, { FC, ReactNode } from "react";
import { SWRConfig, SWRConfiguration } from "swr/_internal";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";

interface Props {
  children: ReactNode;
}

const swrOptions: SWRConfiguration = {
  fetcher: (url: string) => apiClient.get(url).then((res) => res.data), // Example: use axiosInstance for fetching
};
const AppProviders: FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <SWRConfig value={swrOptions}>{children}</SWRConfig>
      <Toaster />
    </SessionProvider>
  );
};

export default AppProviders;
