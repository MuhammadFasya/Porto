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
    "Portfolio of Muhammad Fasya - A 6th-semester Informatics Engineering student specializing in Full-stack Web Development, Android Development, and AI/Computer Vision.",
  keywords: [
    "Muhammad Fasya",
    "Full-stack Developer",
    "AI",
    "Computer Vision",
    "React",
    "Next.js",
    "React Native",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Fasya" }],
  creator: "Muhammad Fasya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadfasya.dev", // Update with your actual domain
    siteName: "Muhammad Fasya Portfolio",
    title: "Muhammad Fasya | Full-stack Developer & AI Enthusiast",
    description:
      "Bridging Web Development with Artificial Intelligence. A 6th-semester Informatics Engineering student passionate about building intelligent applications.",
    images: [
      {
        url: "/og-image.png", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "Muhammad Fasya - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Fasya | Full-stack Developer & AI Enthusiast",
    description:
      "Bridging Web Development with Artificial Intelligence. Full-stack Developer & AI Enthusiast.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
