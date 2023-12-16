import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

import Drawers from "@/components/Drawers";
import { Providers } from "@/redux/provider";

const quickSand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoppingify",

  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quickSand.className}>{children}</body>
    </html>
  );
}
