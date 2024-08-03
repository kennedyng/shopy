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
  fetcher: (resource) => fetch(resource).then((res) => res.json()),
};
const AppProviders: FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <SWRConfig value={swrOptions}>{children}</SWRConfig>
      <Toaster richColors theme="light" />
    </SessionProvider>
  );
};

export default AppProviders;
