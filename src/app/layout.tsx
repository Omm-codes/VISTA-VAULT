import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";
import Navbar from "./components/Navbar";

export const revalidate = 3600

export const metadata: Metadata = {
  title: "Vistavault",
  description: "An image gallery is a visually organized collection of photos or graphics, often arranged in a grid with clickable thumbnails for easy viewing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto">
        
      
        {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}