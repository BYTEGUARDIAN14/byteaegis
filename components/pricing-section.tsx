"use client"

import { motion, useInView } from "framer-motion"
import { Rocket, Building2, Code2, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { RevealHeading } from "@/components/ui/reveal-heading"

const clients = [
  {
    id: "01",
    name: "Early-Stage Startups",
    tagline: "Ship fast. Stay secure.",
    Icon: Rocket,
    description: "You're moving fast and can't afford a breach. We become your security-aware development partner — helping you ship a production-ready product without the corners that end companies.",
    features: ["Secure MVP development", "Security architecture from day one", "Vulnerability assessment", "DevSecOps pipeline setup", "Ongoing security consulting"],
    cta: "Start a Project",
    href: "/contact",
    accent: "from-blue-600/20 to-indigo-600/5",
    glow: "rgba(59,130,246,0.15)",
    featured: false,
  },
  {
    id: "02",
    name: "Small Businesses",
    tagline: "Built right. Delivered end-to-end.",
    Icon: Building2,
    description: "Software built without cutting corners — security included from day one, not bolted on after. One team, full accountability, zero middlemen. We own the entire engagement.",
    features: ["Full-stack web & desktop dev", "Code auditing & hardening", "Secure deployment setup", "AI-powered security tooling", "Complete project ownership"],
    cta: "Discuss Your Project",
    href: "/contact",
    accent: "from-blue-500/30 to-blue-800/10",
    glow: "rgba(59,130,246,0.25)",
    featured: true,
  },
  {
    id: "03",
    name: "Engineering Teams",
    tagline: "Shift security left. Build with confidence.",
    Icon: Code2,
    description: "We integrate into your existing workflow and help build a culture where security is everyone's job — not a blocker at the end of the sprint.",
    features: ["CI/CD security integration", "GitHub Actions / GitLab CI", "Docker & Kubernetes hardening", "Security culture coaching", "DevSecOps roadmap"],
    cta: "Get In Touch",
    href: "/contact",
    accent: "from-indigo-600/20 to-blue-600/5",
    glow: "rgba(99,102,241,0.15)",
    featured: false,
  },
]

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const Icon0 = clients[0].Icon
  const Icon1 = clients[1].Icon
  const Icon2 = clients[2].Icon

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div ref={ref} className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-[0.25em] text-white/40 uppercase mb-4"
          >
            Who We Work With
          </motion.p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black uppercase tracking-tighter leading-none from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-transparent relative z-10">
            <RevealHeading text="Who We Help" delay={0.1} />
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-auto">

          {/* Card 01 — top left, tall */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:row-span-2"
          >
            <Link href={clients[0].href} className="block h-full">
              <div
                className="group relative h-full min-h-[420px] rounded-3xl border border-white/8 bg-white/[0.02] p-8 flex flex-col overflow-hidden cursor-pointer transition-all duration-300 hover:border-blue-500/30"
                style={{ boxShadow: `0 0 0 0 ${clients[0].glow}` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 60px 0 ${clients[0].glow}` }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${clients[0].glow}` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${clients[0].accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                {/* Decorative number */}
                <span className="absolute -top-4 -right-2 text-[160px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                  {clients[0].id}
                </span>
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    <Icon0 className="w-5 h-5 text-blue-400" />
                  </div>
                  {/* Name + tagline */}
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">{clients[0].name}</h3>
                  <p className="text-lg font-medium text-blue-300/90 mb-4">{clients[0].tagline}</p>
                  <p className="text-sm text-white/40 leading-relaxed mb-8 flex-1">{clients[0].description}</p>
                  {/* Features */}
                  <ul className="space-y-2.5 mb-8">
                    {clients[0].features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-xs text-white/55">
                        <Check className="w-3.5 h-3.5 text-blue-400/60 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {/* CTA */}
                  <div className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                    {clients[0].cta}
                    <motion.span whileHover={{ x: 3 }}><ArrowRight className="w-4 h-4" /></motion.span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 02 — top right, FEATURED large */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <Link href={clients[1].href} className="block h-full">
              <div
                className="group relative h-full min-h-[300px] rounded-3xl border border-blue-500/25 bg-gradient-to-br from-blue-600/12 to-transparent p-8 flex flex-col overflow-hidden cursor-pointer transition-all duration-300 hover:border-blue-500/50"
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 80px 0 ${clients[1].glow}` }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${clients[1].glow}` }}
              >
                {/* "Most Common" badge */}
                <span className="absolute top-6 right-6 text-xs font-bold tracking-widest uppercase text-blue-400 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full">
                  Most Common
                </span>
                {/* Decorative number */}
                <span className="absolute -top-6 -right-2 text-[160px] font-black text-white/[0.04] leading-none select-none pointer-events-none">
                  {clients[1].id}
                </span>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6">
                    <Icon1 className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-2">{clients[1].name}</h3>
                  <p className="text-lg font-medium text-blue-300/90 mb-4">{clients[1].tagline}</p>
                  <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-lg">{clients[1].description}</p>
                  {/* Features as pills */}
                  <div className="flex flex-wrap gap-2 mb-6 flex-1 content-end">
                    {clients[1].features.map(f => (
                      <span key={f} className="text-xs text-blue-300/70 bg-blue-500/8 border border-blue-500/20 rounded-full px-3 py-1">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                    {clients[1].cta}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 03 — bottom right, wide */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <Link href={clients[2].href} className="block h-full">
              <div
                className="group relative h-full min-h-[280px] rounded-3xl border border-white/8 bg-white/[0.02] p-8 flex flex-col overflow-hidden cursor-pointer transition-all duration-300 hover:border-indigo-500/30"
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 60px 0 ${clients[2].glow}` }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${clients[2].glow}` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${clients[2].accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                <span className="absolute -top-4 -right-2 text-[160px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                  {clients[2].id}
                </span>
                <div className="relative z-10 flex flex-col lg:flex-row gap-8 h-full">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                      <Icon2 className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">{clients[2].name}</h3>
                    <p className="text-lg font-medium text-indigo-300/90 mb-4">{clients[2].tagline}</p>
                    <p className="text-sm text-white/40 leading-relaxed">{clients[2].description}</p>
                  </div>
                  {/* Right: features + CTA */}
                  <div className="flex flex-col justify-between min-w-[200px]">
                    <ul className="space-y-2 mb-6">
                      {clients[2].features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-xs text-white/50">
                          <span className="w-1 h-1 rounded-full bg-indigo-400/50 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">
                      {clients[2].cta}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/25 text-sm mt-12"
        >
          Every project is taken on end-to-end — design, development, testing, and deployment.{" "}
          <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4">
            Let&apos;s talk.
          </Link>
        </motion.p>
      </div>
    </section>
  )
}
