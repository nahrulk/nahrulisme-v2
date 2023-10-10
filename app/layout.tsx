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
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <script src="./main.js" defer />
        <script src="./scrollreveal.min.js" defer />
        <script src="./swiper-bundle.min.js" defer />
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" defer />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
