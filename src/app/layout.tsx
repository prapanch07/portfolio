import type { Metadata } from "next";
import { spaceMono, margarine, rampartOne } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "J Prapanch | Software Engineer",
  description:
    "Portfolio of J Prapanch — Software Engineer specializing in Flutter, Django, and full-stack web development. Building scalable applications with clean architecture.",
  keywords: [
    "J Prapanch",
    "Software Engineer",
    "Flutter Developer",
    "Django",
    "Full Stack Developer",
    "Portfolio",
    "Trivandrum",
    "Kerala",
  ],
  authors: [{ name: "J Prapanch" }],
  openGraph: {
    title: "J Prapanch | Software Engineer",
    description:
      "Software Engineer specializing in mobile and web applications. Currently building large-scale booking systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "J Prapanch | Software Engineer",
    description:
      "Software Engineer specializing in mobile and web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${margarine.variable} ${rampartOne.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
