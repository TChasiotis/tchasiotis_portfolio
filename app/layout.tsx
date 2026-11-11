import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Φορτώνουμε την Inter και προσθέτουμε ρητά το "greek"
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
});

export const metadata: Metadata = {
  title: "Thomas Chasiotis Portfolio",
  description: "Full-Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
