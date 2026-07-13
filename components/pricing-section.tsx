"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { Rocket, Building2, Code2, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { RevealHeading } from "@/components/ui/reveal-heading"

const clients = [
  {
    id: "01", name: "Early-Stage Startups", tagline: "Ship fast. Stay secure.", Icon: Rocket,
    description: "You're moving fast and can't afford a breach. We become your security-aware development partner, helping you ship a production-ready product without cutting the corners that end companies.",
    features: ["Secure MVP development", "Security architecture from day one", "Vulnerability assessment", "DevSecOps pipeline setup", "Ongoing security consulting"],
    cta: "Start a Project", href: "/contact", rotate: "-1deg", featured: false,
  },
  {
    id: "02", name: "Small Businesses", tagline: "Built right. Delivered end-to-end.", Icon: Building2,
    description: "Software built without cutting corners. Security included from day one, not bolted on after. One team, full accountability, zero middlemen. We own the entire engagement.",
    features: ["Full-stack web & desktop dev", "Code auditing & hardening", "Secure deployment setup", "AI-powered security tooling", "Complete project ownership"],
    cta: "Discuss Your Project", href: "/contact", rotate: "0deg", featured: true,
  },
  {
    id: "03", name: "Engineering Teams", tagline: "Shift security left. Build with confidence.", Icon: Code2,
    description: "We integrate into your existing workflow and help build a culture where security is everyone's job, not a blocker at the end of the sprint.",
    features: ["CI/CD security integration", "GitHub Actions / GitLab CI", "Docker & Kubernetes hardening", "Security culture coaching", "DevSecOps roadmap"],
    cta: "Get In Touch", href: "/contact", rotate: "1deg", featured: false,
  },
]

const hardHover = {
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement
    el.style.border = "2px solid #C9FF3F"
    el.style.boxShadow = "8px 8px 0px 0px #C9FF3F"
    el.style.transform = "translate(-2px,-2px)"
  },
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement
    el.style.border = "2px solid #3D3B37"
    el.style.boxShadow = "6px 6px 0px 0px #3D3B37"
    el.style.transform = "translate(0,0)"
  },
}

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const Icon0 = clients[0].Icon
  const Icon1 = clients[1].Icon
  const Icon2 = clients[2].Icon

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: "#1E1D1B" }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div ref={ref} className="mb-20">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="uppercase mb-4 text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "#C9FF3F", letterSpacing: "0.25em" }}
          >
            Who We Work With
          </motion.p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black uppercase tracking-tighter leading-none text-center relative z-10"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1" }}>
            <RevealHeading text="Who We Help" delay={0.1} />
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-auto">

          {/* Card 01 */}
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-5 lg:row-span-2"
            style={{ transform: `rotate(${clients[0].rotate})` }}>
            <Link href={clients[0].href} className="block h-full">
              <div className="group relative h-full min-h-[420px] p-8 flex flex-col overflow-hidden cursor-pointer transition-all duration-150"
                style={{ backgroundColor: "#2A2825", border: "2px solid #3D3B37", boxShadow: "6px 6px 0px 0px #3D3B37" }}
                {...hardHover}>
                <span className="absolute -top-4 -right-2 text-[160px] font-black leading-none select-none pointer-events-none"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "rgba(201,255,63,0.04)" }}>{clients[0].id}</span>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 flex items-center justify-center mb-6"
                    style={{ backgroundColor: "rgba(201,255,63,0.08)", border: "2px solid rgba(201,255,63,0.3)" }}>
                    <Icon0 className="w-5 h-5" style={{ color: "#C9FF3F" }} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1" }}>{clients[0].name}</h3>
                  <p className="text-lg font-medium mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C9FF3F" }}>{clients[0].tagline}</p>
                  <p className="text-sm leading-relaxed mb-8 flex-1" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#8A8680" }}>{clients[0].description}</p>
                  <ul className="space-y-2.5 mb-8">
                    {clients[0].features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8A8680" }}>
                        <Check className="w-3.5 h-3.5 shrink-0" style={{ color: "#C9FF3F" }} />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C9FF3F" }}>
                    {clients[0].cta}<ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 02 — FEATURED (acid green fill) */}
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-7"
            style={{ transform: `rotate(${clients[1].rotate})` }}>
            <Link href={clients[1].href} className="block h-full">
              <div className="group relative h-full min-h-[300px] p-8 flex flex-col overflow-hidden cursor-pointer transition-all duration-150"
                style={{ backgroundColor: "#C9FF3F", border: "2px solid #C9FF3F", boxShadow: "8px 8px 0px 0px rgba(0,0,0,0.5)" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translate(-3px,-3px)"; el.style.boxShadow = "11px 11px 0px 0px rgba(0,0,0,0.5)" }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translate(0,0)"; el.style.boxShadow = "8px 8px 0px 0px rgba(0,0,0,0.5)" }}>
                <span className="absolute top-6 right-6 text-xs font-bold tracking-widest uppercase px-3 py-1"
                  style={{ fontFamily: "'JetBrains Mono', monospace", backgroundColor: "#1E1D1B", color: "#C9FF3F", border: "2px solid #1E1D1B" }}>
                  Most Common
                </span>
                <span className="absolute -top-6 -right-2 text-[160px] font-black leading-none select-none pointer-events-none"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "rgba(30,29,27,0.06)" }}>{clients[1].id}</span>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 flex items-center justify-center mb-6"
                    style={{ backgroundColor: "rgba(30,29,27,0.15)", border: "2px solid rgba(30,29,27,0.3)" }}>
                    <Icon1 className="w-5 h-5" style={{ color: "#1E1D1B" }} />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1E1D1B" }}>{clients[1].name}</h3>
                  <p className="text-lg font-medium mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "rgba(30,29,27,0.7)" }}>{clients[1].tagline}</p>
                  <p className="text-sm leading-relaxed mb-6 max-w-lg" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "rgba(30,29,27,0.7)" }}>{clients[1].description}</p>
                  <div className="flex flex-wrap gap-2 mb-6 flex-1 content-end">
                    {clients[1].features.map(f => (
                      <span key={f} className="text-xs px-3 py-1"
                        style={{ fontFamily: "'JetBrains Mono', monospace", backgroundColor: "rgba(30,29,27,0.12)", border: "1px solid rgba(30,29,27,0.25)", color: "#1E1D1B" }}>{f}</span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1E1D1B" }}>
                    {clients[1].cta}<ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 03 */}
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-7"
            style={{ transform: `rotate(${clients[2].rotate})` }}>
            <Link href={clients[2].href} className="block h-full">
              <div className="group relative h-full min-h-[280px] p-8 flex flex-col overflow-hidden cursor-pointer transition-all duration-150"
                style={{ backgroundColor: "#2A2825", border: "2px solid #3D3B37", boxShadow: "6px 6px 0px 0px #3D3B37" }}
                {...hardHover}>
                <span className="absolute -top-4 -right-2 text-[160px] font-black leading-none select-none pointer-events-none"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "rgba(201,255,63,0.04)" }}>{clients[2].id}</span>
                <div className="relative z-10 flex flex-col lg:flex-row gap-8 h-full">
                  <div className="flex-1">
                    <div className="w-12 h-12 flex items-center justify-center mb-6"
                      style={{ backgroundColor: "rgba(201,255,63,0.08)", border: "2px solid rgba(201,255,63,0.3)" }}>
                      <Icon2 className="w-5 h-5" style={{ color: "#C9FF3F" }} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1" }}>{clients[2].name}</h3>
                    <p className="text-lg font-medium mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C9FF3F" }}>{clients[2].tagline}</p>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#8A8680" }}>{clients[2].description}</p>
                  </div>
                  <div className="flex flex-col justify-between min-w-[200px]">
                    <ul className="space-y-2 mb-6">
                      {clients[2].features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8A8680" }}>
                          <span className="w-1 h-1 shrink-0" style={{ backgroundColor: "#C9FF3F" }} />{f}
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C9FF3F" }}>
                      {clients[2].cta}<ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="text-center text-sm mt-12" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#8A8680" }}>
          Every project is taken on end-to-end: design, development, testing, and deployment.{" "}
          <Link href="/contact" className="underline underline-offset-4" style={{ color: "#C9FF3F" }}>Let&apos;s talk.</Link>
        </motion.p>
      </div>
    </section>
  )
}
