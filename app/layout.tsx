import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claude Code + VS Code Guide",
  description:
    "The daily-updated beginner guide to using Claude Code with VS Code. Step-by-step setup, tips, and the latest news — automatically summarized every day.",
  openGraph: {
    title: "Claude Code + VS Code Guide",
    description: "Daily-updated AI coding guide for beginners and pros.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          Built with Next.js · Powered by Claude API · Auto-updated daily via GitHub Actions
        </footer>
      </body>
    </html>
  );
}
