import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { product, siteUrl } from "./siteContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ogImageAlt =
  "Spencer's Camera — pro iPhone video app with shutter angle, Apple Log, and production controls.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Spencer's Camera - iOS Pro Video Camera App for iPhone",
    template: "%s - Spencer's Camera",
  },
  description: product.description,
  keywords: product.keywords,
  applicationName: product.websiteName,
  authors: [{ name: "Spencer Shwetz" }],
  creator: "Spencer Shwetz",
  publisher: "Spencer Shwetz",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: product.websiteName,
    title: "Spencer's Camera - iOS Pro Video Camera App for iPhone",
    description: product.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spencer's Camera - iOS Pro Video Camera App for iPhone",
    description: product.description,
    images: {
      url: "/og.png",
      alt: ogImageAlt,
      width: 1200,
      height: 630,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "apple-itunes-app": "app-id=6744284795",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
