import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import "./main.ts";
import  Footer  from "@/components/layout/Footer/Footer";
import  NavBar  from "@/components/layout/NavBar/NavBar";
import  EnhancedBackground  from "@/components/layout/EnhancedBackgrond/EnhancedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RBG Development",
  description: "RBG builds modern websites for businesses and individuals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} id="top">
        <EnhancedBackground />
        <NavBar />
        <main className="overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
