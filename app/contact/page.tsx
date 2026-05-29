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

const TIMELINES = [
  "ASAP",
  "Within 1 Month",
  "1-3 Months",
  "3+ Months",
  "Flexible"
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  
  // Custom Form State
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedTimeline, setSelectedTimeline] = useState<string>("")
  const [turnstileToken, setTurnstileToken] = useState<string>("")

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    
    // Honeypot check - if bot_field is filled out, it's a bot
    const botField = formData.get("bot_field")
    if (botField) {
      // Fake a success to trick the bot
      setIsSubmitting(false)
      setIsSuccess(true)
      return
    }

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
    <div className="min-h-screen w-full relative bg-black cursor-none selection:bg-[#3b82f6] selection:text-white pb-24">
      <CustomCursor />
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3b82f6]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-24">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide uppercase">Back to Home</span>
        </Link>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Left Column: Heading & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 lg:sticky lg:top-24 h-fit"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Let's secure your<br />
              <span className="text-[#3b82f6]">next big thing.</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-12 max-w-md">
              Fill out the form with your project details. The more information you provide, the better we can prepare for our initial discussion.
            </p>

            <div className="space-y-8 p-8 bg-white/[0.02] border border-white/5 rounded-2xl hidden md:block">
              <div>
                <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Direct Contact</h3>
                <a href="mailto:byteguardx@gmail.com" className="text-lg text-white hover:text-[#3b82f6] transition-colors">
                  Send an email
                </a>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div>
                <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Location</h3>
                <p className="text-lg text-white">
                  Tamil Nadu, India<br />
                  <span className="text-sm text-[#3b82f6] mt-1 block">Available globally</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-[#3b82f6]/20 text-[#3b82f6] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Inquiry Received</h2>
                <p className="text-white/60 mb-8 max-w-md text-lg">
                  Thank you for providing your project details. We are reviewing your requirements and will reach out to schedule a consultation shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 border border-white/20 text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                >
                  Submit another project
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* 1. Services Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-2 mb-4">
                    <span className="bg-[#3b82f6]/20 text-[#3b82f6] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <h2 className="text-xl font-semibold text-white">What services do you need?</h2>
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
                          className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
                            isSelected 
                              ? "bg-[#3b82f6]/10 border-[#3b82f6]/50 text-white" 
                              : "bg-white/5 border-white/5 text-white/60 hover:bg-white/10 hover:border-white/20"
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${isSelected ? "text-[#3b82f6]" : "text-white/40"}`} />
                          <span className="font-medium text-sm">{service.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 2. Timeline Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-2 mb-4">
                    <span className="bg-[#3b82f6]/20 text-[#3b82f6] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <h2 className="text-xl font-semibold text-white">Project Timeline</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {TIMELINES.map((timeline) => (
                      <button
                        key={timeline}
                        type="button"
                        onClick={() => setSelectedTimeline(timeline)}
                        className={`px-5 py-2.5 rounded-full border transition-all text-sm font-medium ${
                          selectedTimeline === timeline
                            ? "bg-[#3b82f6] border-[#3b82f6] text-white"
                            : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                        }`}
                      >
                        {timeline}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Details Section */}
                <div className="space-y-6 pt-2">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-2 mb-4">
                    <span className="bg-[#3b82f6]/20 text-[#3b82f6] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <h2 className="text-xl font-semibold text-white">Project Details</h2>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white/70">Full Name *</label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 focus:border-[#3b82f6] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white/70">Work Email *</label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 focus:border-[#3b82f6] transition-all"
                      />
                    </div>
                  </div>

                  {/* Honeypot field - visually hidden to catch bots */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="bot_field">Don&apos;t fill this out if you&apos;re human:</label>
                    <input type="text" id="bot_field" name="bot_field" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-white/70">Company / Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 focus:border-[#3b82f6] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiry" className="text-sm font-medium text-white/70">Project Requirements *</label>
                    <textarea
                      required
                      id="inquiry"
                      name="inquiry"
                      rows={6}
                      placeholder="Tell us about your tech stack, security compliance needs, and what you're trying to achieve..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 focus:border-[#3b82f6] transition-all resize-none"
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                    {error}
                  </div>
                )}

                {/* Cloudflare Turnstile */}
                {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
                  <div className="pt-2">
                    <Turnstile 
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} 
                      onSuccess={(token) => setTurnstileToken(token)}
                      options={{ theme: 'dark' }}
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || (!!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken)}
                  className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-4 md:py-5 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed group text-lg mt-8"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Submit Request
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
