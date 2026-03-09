import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kien Mac Trung — Software Engineer",
  description:
    "Portfolio of Kien Mac Trung, full-stack developer specialized in scalable systems.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "React",
    "NextJS",
    "distributed systems",
  ],
  authors: [{ name: "Kien Mac Trung" }],
  openGraph: {
    title: "Kien Mac Trung — Software Engineer",
    description:
      "Portfolio of Kien Mac Trung, full-stack developer specialized in scalable systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
