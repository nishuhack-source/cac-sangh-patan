import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "सी.ए.सी. संघ विकासखंड – पाटन | Official Website",
  description: "सी.ए.सी. संघ विकासखंड पाटन की आधिकारिक वेबसाइट। शिक्षक समुदाय की आवाज़ - जिला दुर्ग, छत्तीसगढ़।",
  keywords: ["CAC Sangh", "सी.ए.सी. संघ", "पाटन", "दुर्ग", "शिक्षक संघ", "छत्तीसगढ़", "शैक्षणिक समन्वयक"],
  authors: [{ name: "CAC Sangh Patan" }],
  openGraph: {
    title: "सी.ए.सी. संघ विकासखंड – पाटन",
    description: "शिक्षक समुदाय की आवाज़ - जिला दुर्ग, छत्तीसगढ़",
    locale: "hi_IN",
    type: "website",
    siteName: "CAC Sangh Patan",
  },
  twitter: {
    card: "summary_large_image",
    title: "सी.ए.सी. संघ विकासखंड – पाटन",
    description: "शिक्षक समुदाय की आवाज़",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-[#FFFBF5] antialiased">{children}</body>
    </html>
  );
}
