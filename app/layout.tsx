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
  title: "Kapssul – AI-Powered Healthcare Assistant | Automate Patient Follow-Up & Medication Adherence",
  description:
    "Save 10+ hours/week with Kapssul's AI-powered patient monitoring system. Automated medication reminders, drug interaction detection, and real-time adherence tracking. Reduce readmissions by 40% and increase revenue by 30%.",
  keywords: [
    "healthcare automation software",
    "AI patient monitoring",
    "medication adherence tracking",
    "drug interaction detection",
    "post-discharge patient care",
    "hospital readmission reduction",
    "automated patient reminders",
    "WhatsApp healthcare notifications",
    "practitioner productivity tools",
    "patient engagement platform",
    "clinical workflow automation",
    "healthcare AI assistant"
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
    title: "Kapssul – AI-Powered Healthcare Assistant for Practitioners",
    description:
      "Automate patient follow-up, reduce readmissions by 40%, and increase revenue by 30%. Save 10+ hours/week with AI-powered medication tracking and early warning alerts.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kapssul - AI Healthcare Assistant Dashboard"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@kapssul",
    creator: "@kapssul",
    title: "Kapssul – AI Healthcare Assistant | Save 10+ Hours/Week",
    description:
      "Automated patient monitoring, medication adherence tracking, and drug interaction detection. Join 1,000+ practitioners transforming patient care.",
    images: ["/twitter-card.png"]
  },
  alternates: {
    canonical: "https://kapssul.africa"
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  }
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
