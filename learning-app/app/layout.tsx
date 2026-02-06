import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "LearnHub - Online Learning Platform",
  description: "Access your courses, watch lectures, and submit assignments easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="max-w-md mx-auto bg-gray-50 min-h-screen">
          {children}
        </main>
        <Navbar />
      </body>
    </html>
  );
}
