import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import AppProviders from "@/components/AppProviders";

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
        <AppProviders>
          {children}
          <ToastContainer icon={false} />
        </AppProviders>
      </body>
    </html>
  );
}
