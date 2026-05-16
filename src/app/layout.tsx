import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexandru Mihacea | AI Product Founder & Software Engineer",
  description:
    "AI product founder and software engineer building products across AI, vertical marketplaces, logistics, and scalable consumer platforms.",
  openGraph: {
    title: "Alexandru Mihacea | AI Product Founder & Software Engineer",
    description:
      "AI-native product builder with 20k+ organic users, 50+ agency projects, and mission-critical software engineering experience.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Alexandru Mihacea | AI Product Founder & Software Engineer",
    description:
      "AI-native product builder with 20k+ organic users, 50+ agency projects, and mission-critical software engineering experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
