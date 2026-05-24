import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Legal Dashboard | Workflow Management",

  description:
    "Responsive legal workflow and matter management dashboard built with Next.js, TypeScript, and Tailwind CSS.",

  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}