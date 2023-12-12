import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

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
      <body className={quickSand.className}>
        <div className="flex flex-row">
          <Sidebar />
          <div className="h-screen overflow-y-auto w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
