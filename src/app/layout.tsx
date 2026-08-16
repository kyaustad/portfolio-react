import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://kyleaustad.com"
  ),
  title: {
    default: "Kyle Austad — Full-Stack Engineer · Sales · Digital Creator",
    template: "%s | Kyle Austad",
  },
  description:
    "Cybernetic portfolio showcasing flagship work across Sales, Software, 3D Art, Game Dev, and side-project snippets.",
  keywords: [
    "full stack developer",
    "react developer",
    "sales",
    "door to door",
    "typescript",
    "portfolio",
    "kyle austad",
    "unreal engine",
    "blender",
    "game development",
    "3d rendering",
  ],
  authors: [{ name: "Kyle Austad" }],
  creator: "Kyle Austad",
  publisher: "Kyle Austad",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://kyleaustad.com",
    title: "Kyle Austad — Portfolio",
    description:
      "Flagship projects across Sales, Software, 3D Art, Game Dev, and Snippets.",
    siteName: "Kyle Austad Portfolio",
    images: [
      {
        url: "/Portfolio.webp",
        width: 1200,
        height: 630,
        alt: "Kyle Austad Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Austad — Portfolio",
    description:
      "Flagship projects across Sales, Software, 3D Art, Game Dev, and Snippets.",
    images: ["/Portfolio.webp"],
    creator: "@kyaustad",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [
      { url: "/apple-touch-icon.webp", sizes: "180x180", type: "image/webp" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "GVLwcQkDIALQZofNU7OT_OMy6Cy0nOOaAo3QoJrwiYI",
  },
  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio.kyleaustad.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
