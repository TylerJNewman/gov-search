import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Toaster } from "sonner"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Legislative Search AI Assistant",
  description:
    "AI-powered interface for searching and understanding U.S. government bills and legislation",
  openGraph: {
    title: "Legislative Search AI Assistant",
    description:
      "AI-powered interface for searching and understanding U.S. government bills and legislation",
    url: "https://your-domain.com",
    siteName: "Legislative Search AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legislative Search AI Assistant",
    description:
      "AI-powered interface for searching and understanding U.S. government bills and legislation",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
