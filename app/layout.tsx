import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import ErrorBoundary from "@/components/error-boundary"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bhanu Prakash R | Full Stack Software Engineer",
  description:
    "Professional portfolio of Bhanu Prakash R, a Full Stack Software Engineer with DevOps expertise working at Elanco.",
  generator: "v0.app",
  keywords: ["Full Stack Developer", "React", "Next.js", "DevOps", "TypeScript", "AWS", "Portfolio"],
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
    description: "Professional portfolio showcasing expertise in React, Next.js, DevOps, and cloud technologies.",
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
    description: "Professional portfolio showcasing expertise in React, Next.js, DevOps, and cloud technologies.",
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
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BP Portfolio" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="mask-icon" href="/icon.svg" color="#3b82f6" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
