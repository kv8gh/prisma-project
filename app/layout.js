import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "./loading";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <Suspense fallback={<Loading />} ></Suspense> */}
    </html>
  );
}
