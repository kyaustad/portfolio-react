import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
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
  title: {
    default: "Kyle Austad - Full Stack Developer & Software Engineer",
    template: "%s | Kyle Austad Portfolio",
  },
  description:
    "Full-stack developer specializing in React, Node.js, Vue.js, and modern web technologies. Portfolio showcasing projects including Order Place, Voyyance, Shrike LMS, and game development with Unreal Engine.",
  keywords: [
    "full stack developer",
    "react developer",
    "node.js developer",
    "vue.js developer",
    "typescript developer",
    "software engineer",
    "web developer",
    "portfolio",
    "kyle austad",
    "order place",
    "voyyance",
    "shrike lms",
    "unreal engine",
    "game development",
    "3d rendering",
    "blender",
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
    title: "Kyle Austad - Full Stack Developer & Software Engineer",
    description:
      "Full-stack developer specializing in React, Node.js, Vue.js, and modern web technologies. Portfolio showcasing projects including Order Place, Voyyance, Shrike LMS, and game development with Unreal Engine.",
    siteName: "Kyle Austad Portfolio",
    images: [
      {
        url: "/Portfolio.webp",
        width: 1200,
        height: 630,
        alt: "Kyle Austad - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Austad - Full Stack Developer & Software Engineer",
    description:
      "Full-stack developer specializing in React, Node.js, Vue.js, and modern web technologies. Portfolio showcasing projects including Order Place, Voyyance, Shrike LMS, and game development with Unreal Engine.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
