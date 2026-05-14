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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Spencer's Camera - iOS Pro Video Camera App for iPhone",
    template: "%s - Spencer's Camera Website",
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
        url: "/product/recording.png",
        width: 1206,
        height: 2622,
        alt: "Spencer's Camera pro video controls on iPhone.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spencer's Camera - iOS Pro Video Camera App for iPhone",
    description: product.description,
    images: ["/product/recording.png"],
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
