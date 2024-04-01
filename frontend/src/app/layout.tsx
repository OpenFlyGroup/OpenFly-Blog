import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
  title: "OpenFly",
  description: "OpenFly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
