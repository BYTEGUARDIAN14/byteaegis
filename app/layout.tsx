import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SplashScreen } from "@/components/splash-screen"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "byteaegis, Cybersecurity & Secure Software Development",
  description: "byteaegis is a service-based cybersecurity and software development startup. We build secure software, audit codebases, set up DevSecOps pipelines, and integrate AI into security workflows for startups and businesses.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="dark overflow-x-hidden">
        <SplashScreen />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
