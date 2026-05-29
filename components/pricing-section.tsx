"use client"
import { motion } from "framer-motion"
import { Rocket, Building2, Code2, Check } from "lucide-react"
import Link from "next/link"

const clients = [
  {
    name: "Early-Stage Startups",
    tagline: "Ship Fast",
    Icon: Rocket,
    description: "Moving fast and need a security-aware development partner who won't slow you down.",
    features: [
      "Secure MVP development",
      "Security architecture review",
      "Vulnerability assessment",
      "DevSecOps pipeline setup",
      "Ongoing consulting",
    ],
    highlight: false,
    cta: "Start a Project",
  },
  {
    name: "Small Businesses",
    tagline: "Built Right",
    Icon: Building2,
    description: "Need software built without cutting corners, security included from day one, not reviewed after.",
    features: [
      "Full-stack web & desktop dev",
      "Code auditing & hardening",
      "Secure deployment setup",
      "AI-powered security tooling",
      "End-to-end delivery",
    ],
    highlight: true,
    cta: "Discuss Your Project",
  },
  {
    name: "Engineering Teams",
    tagline: "Shift Left",
    Icon: Code2,
    description: "Want to shift security left in your development workflow but don't know where to start.",
    features: [
      "CI/CD security integration",
      "GitHub Actions / GitLab CI",
      "Docker & Kubernetes hardening",
      "Security culture coaching",
      "DevSecOps roadmaps",
    ],
    highlight: false,
    cta: "Get In Touch",
  },
]

export function PricingSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#3b82f6]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 text-sm text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            Who We Work With
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Built for Teams That Take<br className="hidden sm:block" />
            <span className="text-[#3b82f6]"> Security Seriously</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Every engagement is handled end-to-end, from requirement gathering to delivery.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-7 border flex flex-col transition-colors duration-300 ${
                c.highlight
                  ? "bg-gradient-to-b from-[#3b82f6]/10 to-transparent border-[#3b82f6]/40 shadow-xl shadow-[#3b82f6]/10"
                  : "bg-white/[0.03] border-white/10 hover:border-white/20"
              }`}
            >
              {c.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#3b82f6] text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                    Most Common
                  </span>
                </div>
              )}

              {/* Icon + tagline */}
              <div className="flex items-center justify-between mb-5">
                <div className={`p-2.5 rounded-xl ${c.highlight ? "bg-[#3b82f6]/20" : "bg-white/5"}`}>
                  <c.Icon className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <span className="text-xs font-bold tracking-widest text-[#3b82f6]/70 uppercase">
                  {c.tagline}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{c.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">{c.description}</p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                    <Check className="w-4 h-4 text-[#3b82f6] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    c.highlight
                      ? "bg-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/30 hover:bg-[#2563eb]"
                      : "bg-white/8 text-white border border-white/15 hover:bg-white/12"
                  }`}
                >
                  {c.cta}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/30 text-sm mt-10"
        >
          Every project is taken on end-to-end, design, development, testing, and deployment.
        </motion.p>
      </div>
    </section>
  )
}
