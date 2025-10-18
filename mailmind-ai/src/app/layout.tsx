import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MailMind AI — Chrome Extension Architecture",
  description:
    "Blueprint for MailMind AI, a Chrome extension that turns Gmail and Outlook emails into proactive scheduling recommendations.",
  openGraph: {
    title: "MailMind AI — Intelligent Email Scheduling Assistant",
    description:
      "Full-stack workflow, architecture, and rollout plan for a Chrome extension that detects scheduling signals in Gmail and Outlook.",
    url: "https://agentic-16ba834b.vercel.app",
    siteName: "MailMind AI Architecture",
  },
  twitter: {
    card: "summary_large_image",
    title: "MailMind AI — Chrome Extension Blueprint",
    description:
      "Explore the workflow and technical architecture for an inbox-native scheduling assistant across Gmail and Outlook.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
