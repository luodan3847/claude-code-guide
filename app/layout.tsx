import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Claude Code Guide",
    template: "%s | Claude Code Guide",
  },
  metadataBase: new URL(siteUrl),
  description:
    "A professional public project about AI-assisted research workflows, structured learning, and clearer technical execution with Claude Code.",
  keywords: [
    "Claude Code",
    "AI workflow",
    "Next.js",
    "research workflow",
    "TypeScript",
    "applied AI",
    "portfolio project",
  ],
  openGraph: {
    title: "Claude Code Guide",
    description:
      "A polished project that presents Claude Code as a structured system for research, learning, and practical execution.",
    type: "website",
    siteName: "Claude Code Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code Guide",
    description:
      "A polished project that presents Claude Code as a structured system for research, learning, and practical execution.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
