import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fira = Fira_Code({ subsets: ["latin"], variable: "--font-fira" });

export const metadata: Metadata = {
  title: {
    default: "CodeAI Academy - Belajar Coding, Web & AI",
    template: "%s | CodeAI Academy",
  },
  description:
    "Tutorial coding, pembuatan website, dan AI untuk pemula hingga mahasiswa.",
  keywords: ["tutorial coding", "belajar web", "AI", "pemrograman"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "CodeAI Academy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${fira.variable}`}>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}