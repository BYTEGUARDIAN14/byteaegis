"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, ArrowLeft, Loader2, CheckCircle2, ShieldCheck, Code, Settings, Cpu, Briefcase } from "lucide-react"
import Link from "next/link"
import { CustomCursor } from "@/components/custom-cursor"
import { Turnstile } from "@marsidev/react-turnstile"

const SERVICES = [
  { id: "dev", label: "Secure Development", icon: Code },
  { id: "audit", label: "Code Auditing", icon: ShieldCheck },
  { id: "devsecops", label: "DevSecOps", icon: Settings },
  { id: "ai", label: "AI Integration", icon: Cpu },
  { id: "consulting", label: "Consulting", icon: Briefcase },
]

const TIMELINES = ["ASAP", "Within 1 Month", "1-3 Months", "3+ Months", "Flexible"]

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#2A2825",
  border: "2px solid #3D3B37",
  padding: "14px 16px",
  color: "#E8E6E1",
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "15px",
  outline: "none",
  transition: "border-color 0.12s, box-shadow 0.12s",
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedTimeline, setSelectedTimeline] = useState<string>("")
  const [turnstileToken, setTurnstileToken] = useState<string>("")

  const toggleService = (id: string) => {
    setSelectedServices(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id])
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const botField = formData.get("bot_field")
    if (botField) { setIsSubmitting(false); setIsSuccess(true); return }

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      services: selectedServices,
      timeline: selectedTimeline,
      inquiry: formData.get("inquiry"),
      turnstileToken,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        const errData = await response.json().catch(() => ({}))
        throw new Error(errData.error || "Failed to send message")
      }
      setIsSuccess(true)
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen w-full relative cursor-none pb-24" style={{ backgroundColor: "#1E1D1B" }}>
      <CustomCursor />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-24">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-12 transition-colors group"
          style={{ color: "#8A8680", fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#C9FF3F")}
          onMouseLeave={e => (e.currentTarget.style.color = "#8A8680")}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back to Home</span>
        </Link>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="lg:col-span-5 lg:sticky lg:top-24 h-fit"
          >
            <h1
              className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1", letterSpacing: "-0.035em" }}
            >
              Let&apos;s secure your<br />
              <span style={{ color: "#C9FF3F" }}>next big thing.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-12 max-w-md" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#8A8680" }}>
              Fill out the form with your project details. The more information you provide, the better we can prepare for our initial discussion.
            </p>

            <div
              className="space-y-8 p-8 hidden md:block"
              style={{ backgroundColor: "#2A2825", border: "2px solid #3D3B37", boxShadow: "4px 4px 0px 0px #C9FF3F" }}
            >
              <div>
                <h3 className="text-xs font-bold uppercase mb-2" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#C9FF3F", letterSpacing: "0.15em" }}>
                  Direct Contact
                </h3>
                <a
                  href="mailto:byteguardx@gmail.com"
                  className="text-lg transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C9FF3F")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#E8E6E1")}
                >
                  Send an email
                </a>
              </div>
              <div style={{ height: "1px", backgroundColor: "#3D3B37" }} />
              <div>
                <h3 className="text-xs font-bold uppercase mb-2" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#C9FF3F", letterSpacing: "0.15em" }}>
                  Location
                </h3>
                <p className="text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1" }}>
                  Tamil Nadu, India<br />
                  <span className="text-sm mt-1 block" style={{ color: "#8A8680" }}>Available globally</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 p-6 md:p-10"
            style={{ backgroundColor: "#2A2825", border: "2px solid #3D3B37", boxShadow: "6px 6px 0px 0px #C9FF3F" }}
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <div
                  className="w-20 h-20 flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(201,255,63,0.12)", border: "2px solid #C9FF3F" }}
                >
                  <CheckCircle2 className="w-10 h-10" style={{ color: "#C9FF3F" }} />
                </div>
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1" }}>
                  Inquiry Received
                </h2>
                <p className="mb-8 max-w-md text-lg" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#8A8680" }}>
                  Thank you for providing your project details. We are reviewing your requirements and will reach out to schedule a consultation shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 text-sm font-medium transition-all duration-100"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    border: "2px solid #3D3B37",
                    color: "#E8E6E1",
                    backgroundColor: "transparent",
                    boxShadow: "3px 3px 0px 0px #3D3B37",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = "#C9FF3F"
                    el.style.color = "#C9FF3F"
                    el.style.boxShadow = "3px 3px 0px 0px #C9FF3F"
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = "#3D3B37"
                    el.style.color = "#E8E6E1"
                    el.style.boxShadow = "3px 3px 0px 0px #3D3B37"
                  }}
                >
                  Submit another project
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">

                {/* Section header helper */}
                {[
                  { num: "1", title: "What services do you need?" },
                  { num: "2", title: "Project Timeline" },
                  { num: "3", title: "Project Details" },
                ].map(() => null)}

                {/* 1. Services */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-2 mb-4" style={{ borderBottom: "1px solid #3D3B37" }}>
                    <span className="w-6 h-6 flex items-center justify-center text-xs font-bold"
                      style={{ fontFamily: "'JetBrains Mono', monospace", backgroundColor: "rgba(201,255,63,0.12)", color: "#C9FF3F", border: "1px solid #C9FF3F" }}>
                      1
                    </span>
                    <h2 className="text-xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1" }}>
                      What services do you need?
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES.map((service) => {
                      const Icon = service.icon
                      const isSelected = selectedServices.includes(service.label)
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => toggleService(service.label)}
                          className="flex items-center gap-3 p-4 text-left transition-all duration-100"
                          style={{
                            backgroundColor: isSelected ? "rgba(201,255,63,0.08)" : "#333129",
                            border: `2px solid ${isSelected ? "#C9FF3F" : "#3D3B37"}`,
                            boxShadow: isSelected ? "3px 3px 0px 0px #C9FF3F" : "none",
                            color: isSelected ? "#E8E6E1" : "#8A8680",
                            fontFamily: "'Space Grotesk', sans-serif",
                          }}
                        >
                          <Icon className="w-5 h-5 shrink-0" style={{ color: isSelected ? "#C9FF3F" : "#8A8680" }} />
                          <span className="font-medium text-sm">{service.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 2. Timeline */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-2 mb-4" style={{ borderBottom: "1px solid #3D3B37" }}>
                    <span className="w-6 h-6 flex items-center justify-center text-xs font-bold"
                      style={{ fontFamily: "'JetBrains Mono', monospace", backgroundColor: "rgba(201,255,63,0.12)", color: "#C9FF3F", border: "1px solid #C9FF3F" }}>
                      2
                    </span>
                    <h2 className="text-xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1" }}>
                      Project Timeline
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {TIMELINES.map((timeline) => (
                      <button
                        key={timeline}
                        type="button"
                        onClick={() => setSelectedTimeline(timeline)}
                        className="px-5 py-2.5 text-sm font-medium transition-all duration-100"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          backgroundColor: selectedTimeline === timeline ? "#C9FF3F" : "#333129",
                          border: `2px solid ${selectedTimeline === timeline ? "#C9FF3F" : "#3D3B37"}`,
                          color: selectedTimeline === timeline ? "#1E1D1B" : "#8A8680",
                          boxShadow: selectedTimeline === timeline ? "3px 3px 0px 0px rgba(0,0,0,0.3)" : "none",
                        }}
                      >
                        {timeline}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Details */}
                <div className="space-y-6 pt-2">
                  <div className="flex items-center gap-3 pb-2 mb-4" style={{ borderBottom: "1px solid #3D3B37" }}>
                    <span className="w-6 h-6 flex items-center justify-center text-xs font-bold"
                      style={{ fontFamily: "'JetBrains Mono', monospace", backgroundColor: "rgba(201,255,63,0.12)", color: "#C9FF3F", border: "1px solid #C9FF3F" }}>
                      3
                    </span>
                    <h2 className="text-xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1" }}>
                      Project Details
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#8A8680" }}>Full Name *</label>
                      <input
                        required type="text" id="name" name="name" placeholder="John Doe"
                        style={inputStyle}
                        onFocus={e => { e.currentTarget.style.borderColor = "#C9FF3F"; e.currentTarget.style.boxShadow = "3px 3px 0px 0px #C9FF3F" }}
                        onBlur={e => { e.currentTarget.style.borderColor = "#3D3B37"; e.currentTarget.style.boxShadow = "none" }}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#8A8680" }}>Work Email *</label>
                      <input
                        required type="email" id="email" name="email" placeholder="john@company.com"
                        style={inputStyle}
                        onFocus={e => { e.currentTarget.style.borderColor = "#C9FF3F"; e.currentTarget.style.boxShadow = "3px 3px 0px 0px #C9FF3F" }}
                        onBlur={e => { e.currentTarget.style.borderColor = "#3D3B37"; e.currentTarget.style.boxShadow = "none" }}
                      />
                    </div>
                  </div>

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="bot_field">Don&apos;t fill this out if you&apos;re human:</label>
                    <input type="text" id="bot_field" name="bot_field" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#8A8680" }}>Company / Organization</label>
                    <input
                      type="text" id="company" name="company" placeholder="e.g. Acme Corp"
                      style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = "#C9FF3F"; e.currentTarget.style.boxShadow = "3px 3px 0px 0px #C9FF3F" }}
                      onBlur={e => { e.currentTarget.style.borderColor = "#3D3B37"; e.currentTarget.style.boxShadow = "none" }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiry" className="text-sm font-medium" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#8A8680" }}>Project Requirements *</label>
                    <textarea
                      required id="inquiry" name="inquiry" rows={6}
                      placeholder="Tell us about your tech stack, security compliance needs, and what you're trying to achieve..."
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={e => { e.currentTarget.style.borderColor = "#C9FF3F"; e.currentTarget.style.boxShadow = "3px 3px 0px 0px #C9FF3F" }}
                      onBlur={e => { e.currentTarget.style.borderColor = "#3D3B37"; e.currentTarget.style.boxShadow = "none" }}
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-4 text-sm" style={{ backgroundColor: "rgba(255,76,76,0.1)", border: "2px solid rgba(255,76,76,0.3)", color: "#FF4C4C" }}>
                    {error}
                  </div>
                )}

                {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
                  <div className="pt-2">
                    <Turnstile
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                      onSuccess={(token) => setTurnstileToken(token)}
                      options={{ theme: "dark" }}
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || (!!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken)}
                  className="w-full py-4 md:py-5 flex items-center justify-center gap-2 text-lg font-bold mt-8 transition-all duration-100 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    backgroundColor: "#C9FF3F",
                    color: "#1E1D1B",
                    border: "2px solid #C9FF3F",
                    boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.4)",
                    letterSpacing: "-0.02em",
                  }}
                  onMouseEnter={e => {
                    if (!isSubmitting) {
                      const el = e.currentTarget as HTMLElement
                      el.style.transform = "translate(-2px,-2px)"
                      el.style.boxShadow = "6px 6px 0px 0px rgba(0,0,0,0.4)"
                    }
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = "translate(0,0)"
                    el.style.boxShadow = "4px 4px 0px 0px rgba(0,0,0,0.4)"
                  }}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Submit Request
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
