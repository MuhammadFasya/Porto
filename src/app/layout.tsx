import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Muhammad Fasya | Full-stack Developer & AI Enthusiast",
  description:
    "Portfolio of Muhammad Fasya - A 5th-semester Informatics Engineering student specializing in Full-stack Web Development and AI/Computer Vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${plusJakartaSans.variable} antialiased bg-[#0a0a0f] text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
