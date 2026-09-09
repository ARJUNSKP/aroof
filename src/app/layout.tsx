import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "PP Pangaia & Avenir Next",
  description: "Setup with custom fonts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <Header />
        {/* Main content flows underneath the absolute header */}
        <main>{children}</main>
      </body>
    </html>
  );
}
