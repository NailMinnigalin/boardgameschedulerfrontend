import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BoardGameScheduler",
  description: "The app for finding people for boardgames",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
