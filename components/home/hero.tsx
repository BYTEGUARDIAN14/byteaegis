"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import SideRays from "@/components/ui/side-rays"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      className="relative overflow-hidden min-h-[100vh] flex flex-col"
      style={{ backgroundColor: "#1E1D1B" }}
    >
      {/* SideRays — acid green palette */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <SideRays
          speed={2.5}
          rayColor1="#C9FF3F"
          rayColor2="#7AB800"
          intensity={1.4}
          spread={2}
          origin="top-left"
          tilt={0}
          saturation={1.2}
          blend={0.6}
          falloff={1.8}
          opacity={0.55}
        />
      </div>

      <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col">
        <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center">

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <h1
              id="main-title"
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.035em",
                color: "#E8E6E1",
              }}
            >
              We Build Software{" "}
              <strong style={{ color: "#C9FF3F" }}>Securely.</strong>
              <br />
              We Secure What&apos;s Already <strong>Built.</strong>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              color: "#8A8680",
            }}
          >
            byteaegis is a cybersecurity and software development startup working with startups, small businesses,
            and development teams who need security-focused software built or their existing systems hardened.
            Security isn&apos;t an add-on, it&apos;s fundamental to every engagement we take on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Primary CTA */}
              <Link href="/contact">
                <button
                  className="flex items-center gap-3 px-6 py-3 font-bold text-base transition-all duration-100"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    backgroundColor: "#C9FF3F",
                    color: "#1E1D1B",
                    border: "2px solid #C9FF3F",
                    boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.5)",
                    letterSpacing: "-0.02em",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = "translate(-2px,-2px)"
                    el.style.boxShadow = "6px 6px 0px 0px rgba(0,0,0,0.5)"
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = "translate(0,0)"
                    el.style.boxShadow = "4px 4px 0px 0px rgba(0,0,0,0.5)"
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Start a Project
                </button>
              </Link>

              {/* Secondary CTA */}
              <a href="https://github.com/byteaegiss" target="_blank" rel="noopener noreferrer">
                <button
                  className="flex items-center gap-3 px-6 py-3 font-bold text-base transition-all duration-100"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    backgroundColor: "transparent",
                    color: "#C9FF3F",
                    border: "2px solid #C9FF3F",
                    boxShadow: "4px 4px 0px 0px #C9FF3F",
                    letterSpacing: "-0.02em",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = "translate(-2px,-2px)"
                    el.style.boxShadow = "6px 6px 0px 0px #C9FF3F"
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = "translate(0,0)"
                    el.style.boxShadow = "4px 4px 0px 0px #C9FF3F"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View GitHub
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
