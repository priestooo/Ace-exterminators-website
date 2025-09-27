import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "Ace Exterminators - Oklahoma's Premier Pest Control Service",
  description:
    "Professional pest control services in Oklahoma. Licensed, insured, and available 24/7 for emergency pest control. Get your free quote today!",
  keywords:
    "pest control, exterminator, Oklahoma, termite control, rodent control, commercial pest control, emergency pest service",
  authors: [{ name: "Ace Exterminators" }],
  openGraph: {
    title: "Ace Exterminators - Oklahoma's Premier Pest Control Service",
    description:
      "Professional pest control services in Oklahoma. Licensed, insured, and available 24/7 for emergency pest control.",
    url: "https://aceexterminators.com",
    siteName: "Ace Exterminators",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ace Exterminators - Professional Pest Control",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ace Exterminators - Oklahoma's Premier Pest Control Service",
    description:
      "Professional pest control services in Oklahoma. Licensed, insured, and available 24/7 for emergency pest control.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} ${orbitron.variable}`}>{children}</body>
    </html>
  )
}
