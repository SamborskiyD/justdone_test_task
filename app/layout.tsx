import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'


const inter = Inter({
  weight: ['400', '500','600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
