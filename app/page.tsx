"use client"
import { useState, useEffect } from "react"
import Hero from "@/components/home/hero"
import Features from "@/components/features"
import { TechStack } from "@/components/tech-stack"
import { TestimonialsSection } from "@/components/testimonials"
import { NewReleasePromo } from "@/components/new-release-promo"
import { FAQSection } from "@/components/faq-section"
import { PricingSection } from "@/components/pricing-section"
import { StickyFooter } from "@/components/sticky-footer"
import { CustomCursor } from "@/components/custom-cursor"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(elementId)
      if (element) {
        const headerOffset = 120
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset
        window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      }
    }, 100)
  }

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerOffset = 120
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <div className="w-full relative" style={{ backgroundColor: "#1E1D1B" }}>
      <CustomCursor />

      {/* Desktop Header */}
      <header
        className={`fixed top-4 left-0 right-0 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start md:flex transition-all duration-300 ${
          isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
        } py-2`}
        style={{
          backgroundColor: "#2A2825",
          border: "2px solid #3D3B37",
          boxShadow: "4px 4px 0px 0px #C9FF3F",
          willChange: "transform",
        }}
      >
        <a
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${isScrolled ? "ml-4" : ""}`}
          href="/"
          rel="noopener noreferrer"
        >
          <div className="w-8 h-8" style={{ backgroundColor: "#C9FF3F", WebkitMask: "url(/logo-blue.svg) center/contain no-repeat", mask: "url(/logo-blue.svg) center/contain no-repeat" }} aria-label="byteaegis Logo" />
          <span
            className="hidden sm:inline font-bold text-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C9FF3F", letterSpacing: "-0.02em" }}
          >
            byteaegis
          </span>
        </a>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium md:flex md:space-x-2">
          {["Services", "Who We Help", "Why Us", "FAQ"].map((label, i) => {
            const ids = ["services", "who-we-work-with", "why-byteaegis", "faq"]
            return (
              <a
                key={label}
                className="relative px-4 py-2 cursor-pointer transition-colors duration-150"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#8A8680", fontSize: "13px", letterSpacing: "-0.01em" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C9FF3F")}
                onMouseLeave={e => (e.currentTarget.style.color = "#8A8680")}
                onClick={e => { e.preventDefault(); scrollToSection(ids[i]) }}
              >
                <span className="relative z-20">{label}</span>
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-4 relative z-50">
          <a
            href="/contact"
            className="px-4 py-2 text-sm font-bold transition-all duration-100"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              backgroundColor: "#C9FF3F",
              color: "#1E1D1B",
              border: "2px solid #C9FF3F",
              boxShadow: "3px 3px 0px 0px rgba(0,0,0,0.4)",
              letterSpacing: "-0.02em",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "translate(-2px,-2px)"
              el.style.boxShadow = "5px 5px 0px 0px rgba(0,0,0,0.4)"
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "translate(0,0)"
              el.style.boxShadow = "3px 3px 0px 0px rgba(0,0,0,0.4)"
            }}
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className="fixed top-4 left-4 right-4 z-[9999] flex flex-row items-center justify-between md:hidden px-4 py-3"
        style={{
          backgroundColor: "#2A2825",
          border: "2px solid #3D3B37",
          boxShadow: "4px 4px 0px 0px #C9FF3F",
        }}
      >
        <a className="flex items-center justify-center gap-2" href="/" rel="noopener noreferrer">
          <div className="w-7 h-7" style={{ backgroundColor: "#C9FF3F", WebkitMask: "url(/logo-blue.svg) center/contain no-repeat", mask: "url(/logo-blue.svg) center/contain no-repeat" }} aria-label="byteaegis Logo" />
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 transition-colors"
          style={{
            backgroundColor: "#333129",
            border: "2px solid #3D3B37",
          }}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              style={{ backgroundColor: "#C9FF3F" }}
            />
            <span
              className={`block w-4 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "#C9FF3F" }}
            />
            <span
              className={`block w-4 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              style={{ backgroundColor: "#C9FF3F" }}
            />
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] md:hidden" style={{ backgroundColor: "rgba(30,29,27,0.95)" }}>
          <div
            className="absolute top-20 left-4 right-4 p-6"
            style={{
              backgroundColor: "#2A2825",
              border: "2px solid #3D3B37",
              boxShadow: "6px 6px 0px 0px #C9FF3F",
            }}
          >
            <nav className="flex flex-col space-y-2">
              {["Services", "Who We Help", "Why Us", "FAQ"].map((label, i) => {
                const ids = ["services", "who-we-work-with", "why-byteaegis", "faq"]
                return (
                  <button
                    key={label}
                    onClick={() => handleMobileNavClick(ids[i])}
                    className="text-left px-4 py-3 text-lg font-medium transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#8A8680" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C9FF3F")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#8A8680")}
                  >
                    {label}
                  </button>
                )
              })}
              <div className="pt-4 mt-2 flex flex-col space-y-3" style={{ borderTop: "1px solid #3D3B37" }}>
                <a
                  href="/contact"
                  className="px-4 py-3 text-lg font-bold text-center transition-all duration-100"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    backgroundColor: "#C9FF3F",
                    color: "#1E1D1B",
                    border: "2px solid #C9FF3F",
                    boxShadow: "3px 3px 0px 0px rgba(0,0,0,0.4)",
                  }}
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Hero />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Services Section */}
      <div id="services">
        <Features />
      </div>

      {/* Downloads / Engagement Models */}
      <div id="who-we-work-with">
        <PricingSection />
      </div>

      {/* Why byteaegis Section */}
      <div id="why-byteaegis">
        <TestimonialsSection />
      </div>

      <NewReleasePromo />

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Spacer to prevent footer collision (footer height is h-80 = 320px) */}
      <div className="h-80 w-full" />

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
  )
}
