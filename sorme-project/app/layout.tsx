import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NextBreadcrumb from "./components/NextBreadcrumb";

export const metadata: Metadata = {
  title: "sorme.ir",
  description: "Generated by create next app",
};
const yekanBakh = localFont({
  src: "../public/font/BYekan/BYekan+.ttf",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
