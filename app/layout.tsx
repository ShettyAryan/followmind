import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FollowMind — Stop Forgetting. Start Following Up.",
  description:
    "Connect your Google Sheets + Gmail to get personalized, context-aware follow-up emails drafted automatically. Never lose a lead again.",
  openGraph: {
    title: "FollowMind — Stop Forgetting. Start Following Up.",
    description:
      "AI-powered follow-up automation for Google Sheets + Gmail. Join 1,240+ on the waitlist.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
