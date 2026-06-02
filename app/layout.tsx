import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarak IT Solutions",
  description: "Modern IT Solutions & Digital Services",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body
        suppressHydrationWarning
        className="bg-white text-gray-900 antialiased"
      >
        {children}
      </body>
    </html>
  );
}