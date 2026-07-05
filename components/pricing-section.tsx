"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { RevealHeading } from "@/components/ui/reveal-heading"

const clients = [
  {
    id: "01",
    name: "Early-Stage Startups",
    tagline: "Ship fast. Stay secure.",
    description:
      "You're moving fast and can't afford a breach. We become your security-aware development partner — helping you ship a production-ready MVP without the corners that end companies.",
    features: [
      "Secure MVP development",
      "Security architecture from day one",
      "Vulnerability assessment",
      "DevSecOps pipeline setup",
      "Ongoing security consulting",
    ],
    cta: "Start a Project",
    href: "/contact",
  },
  {
    id: "02",
    name: "Small Businesses",
    tagline: "Built right. Delivered end-to-end.",
    description:
      "You need software built without cutting corners — security included from day one, not reviewed after the fact. One team, full accountability, zero middlemen.",
    features: [
      "Full-stack web & desktop dev",
      "Code auditing & hardening",
      "Secure deployment setup",
      "AI-powered security tooling",
      "Complete project ownership",
    ],
    cta: "Discuss Your Project",
    href: "/contact",
  },
  {
    id: "03",
    name: "Engineering Teams",
    tagline: "Shift security left. Build with confidence.",
    description:
      "You want security integrated into your workflow, not bolted on after the fact. We plug into your existing process and help build a culture where security is everyone's job.",
    features: [
      "CI/CD security integration",
      "GitHub Actions / GitLab CI",
      "Docker & Kubernetes hardening",
      "Security culture coaching",
      "DevSecOps roadmap planning",
    ],
    cta: "Get In Touch",
    href: "/contact",
  },
]

function ClientRow({
  client,
  index,
}: {
  client: (typeof clients)[0]
  index: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={client.href}>
        <div
          className="group relative border-t border-white/10 cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Hover bg */}
          <motion.div
            className="absolute inset-0 bg-white/[0.025]"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />

          <div className="relative flex items-start gap-6 py-7 px-2">
            {/* Number */}
            <span className="text-xs font-mono text-white/25 mt-1 w-6 shrink-0 select-none">
              {client.id}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white/85 group-hover:text-white transition-colors duration-200">
                    {client.name}
                  </h3>
                  <p className="text-sm text-white/35 mt-1 font-light">
                    {client.tagline}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/35 group-hover:border-blue-500/60 group-hover:text-blue-400 transition-colors duration-200"
                  animate={{ rotate: hovered ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Expand on hover */}
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                      <p className="text-sm text-white/45 leading-relaxed">
                        {client.description}
                      </p>
                      <ul className="space-y-2">
                        {client.features.map((f) => (
                          <li
                            key={f}
                            className="text-xs text-white/50 flex items-center gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-blue-400/60 shrink-0" />
                            {f}
                          </li>
                        ))}
                        <li className="pt-2">
                          <span className="text-xs font-semibold text-blue-400 flex items-center gap-1">
                            {client.cta}
                            <ArrowUpRight className="w-3 h-3" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <p className="text-xs font-mono tracking-[0.25em] text-white/40 uppercase mb-4">
            Who We Work With
          </p>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-transparent relative z-10">
            <RevealHeading text="Built for Teams That Take Security Seriously" delay={0.1} />
          </h2>
        </motion.div>

        {/* Client rows */}
        <div>
          {clients.map((c, i) => (
            <ClientRow key={c.id} client={c} index={i} />
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex items-center justify-between"
        >
          <p className="text-sm text-white/30">
            Not sure which fits you?{" "}
            <Link
              href="/contact"
              className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4"
            >
              Let&apos;s talk.
            </Link>
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="text-sm font-medium px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              Get In Touch →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
