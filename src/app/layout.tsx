import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShadStack - Lightweight UI Framework",
  description: "Minimal, complete, HTML/CSS UI framework.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/ui.min.css" />
        <script defer src="/ui.min.js"></script>
      </head>
      <body className={`${inter.className} min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]`}>
        {children}
      </body>
    </html>
  );
}
