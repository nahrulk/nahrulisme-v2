import Script from "next/script";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nahrulisme v2",
  description: "an portfolio website using next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="./main.js" defer />
        <script src="./scrollreveal.min.js" defer />
        <script src="./swiper-bundle.min.js" defer />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
