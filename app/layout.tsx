import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { SplashScreen } from "@/components/splash-screen"

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
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="dark overflow-x-hidden">
        <SplashScreen />
        {children}
      </body>
    </html>
  )
}
