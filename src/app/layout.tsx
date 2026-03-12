import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kien Mac Trung — Software Engineer",
  description:
    "Portfolio of Kien Mac Trung, specializing in scalable systems, microservices, and modern frontend architecture.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "React",
    "Next.js",
    "distributed systems",
    "microservices",
  ],
  authors: [{ name: "Kien Mac Trung" }],
  openGraph: {
    title: "Kien Mac Trung — Software Engineer",
    description:
      "Portfolio of Kien Mac Trung, specializing in scalable systems, microservices, and modern frontend architecture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <div className="noise-overlay" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
