import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kien Mac Trung — Software Engineer",
  description:
    "Portfolio of Kien Mac Trung, full-stack developer specialized in scalable systems, microservices, and modern frontend architecture.",
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
      "Portfolio of Kien Mac Trung, full-stack developer specialized in scalable systems, microservices, and modern frontend architecture.",
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
      className={`${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
