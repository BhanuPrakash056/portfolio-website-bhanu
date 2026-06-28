import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ErrorBoundary from "@/components/error-boundary";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Bhanu Prakash R | Full Stack Software Engineer & React Developer",
  description:
    "Bhanu Prakash R is a Full Stack Software Engineer at Elanco specializing in React, Next.js, TypeScript, Node.js, AWS, and DevOps. Explore projects, experience, and skills.",
  keywords: [
    "Bhanu Prakash R",
    "Full Stack Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "DevOps Engineer",
    "AWS",
    "Cloud Engineer",
    "Software Engineer Elanco",
    "Portfolio",
  ],
  authors: [{ name: "Bhanu Prakash R" }],
  creator: "Bhanu Prakash R",
  publisher: "Bhanu Prakash R",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bhanuprakash-r.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bhanu Prakash R | Full Stack Software Engineer",
    description:
      "Professional portfolio showcasing expertise in React, Next.js, DevOps, and cloud technologies.",
    url: "https://bhanuprakash-r.dev",
    siteName: "Bhanu Prakash R Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bhanu Prakash R - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhanu Prakash R | Full Stack Software Engineer",
    description:
      "Professional portfolio showcasing expertise in React, Next.js, DevOps, and cloud technologies.",
    images: ["/og-image.png"],
    creator: "@bhanuprakash_r",
  },
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
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BP Portfolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>{children}</ErrorBoundary>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
