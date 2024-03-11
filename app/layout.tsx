import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobile-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Design4Them",
    template: "%s | Design4Them",
  },
  description:
    "Looking for a custom logo design by a professional logo designer? We can help! On-time, affordable, we are the best logo design company that you are looking for.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <MobileNavbar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
