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
  title: "Kapssul | Behavioral Health Intelligence Platform",
  description:
    "Information for clinical practitioners and hospitals. Kapssul automates behavioral tracking and medication adherence monitoring to improve patient outcomes.",
  keywords: [
    "behavioral health software",
    "patient adherence tracking",
    "clinical psychology tools",
    "remote patient monitoring",
    "mental health technology",
    "practitioner dashboard"
  ],
  authors: [{ name: "Kapssul" }],
  creator: "Kapssul",
  publisher: "Kapssul",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kapssul.africa",
    siteName: "Kapssul",
    title: "Kapssul - Precision Behavioral Health Intelligence",
    description:
      "Bridging the gap between clinical sessions and patient reality. Join the waitlist for the next generation of patient monitoring tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kapssul Clinical Dashboard"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@kapssul",
    creator: "@kapssul",
    title: "Kapssul | Behavioral Health Intelligence",
    description:
      "Advanced patient monitoring for mental health professionals.",
    images: ["/twitter-card.png"]
  },
  alternates: {
    canonical: "https://kapssul.africa"
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
