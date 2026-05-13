import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexandru Mihacea | AI-Native Product Builder",
  description:
    "Portfolio of Alexandru Mihacea, an AI-native product builder, agency founder, and software engineer working across vertical marketplaces, logistics, and scalable consumer products.",
  openGraph: {
    title: "Alexandru Mihacea | Portfolio",
    description:
      "AI-native product builder with 20k+ organic users, 50+ agency projects, and mission-critical software engineering experience.",
    type: "website",
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
      </body>
    </html>
  );
}
