"use client"
import { motion, useInView } from "framer-motion"
import { Rocket, Building2, Code2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { RevealHeading } from "@/components/ui/reveal-heading"

const clients = [
  {
    number: "01",
    name: "Early-Stage Startups",
    tagline: "Ship Fast. Stay Secure.",
    Icon: Rocket,
    description:
      "Moving fast and need a security-aware development partner who won't slow you down. We help you ship an MVP without cutting corners that could end your company.",
    accentFeature: "Secure MVP Development",
    otherFeatures: [
      "Security architecture review",
      "Vulnerability assessment",
      "DevSecOps pipeline setup",
      "Ongoing security consulting",
    ],
    cta: "Start a Project",
    href: "/contact",
  },
  {
    number: "02",
    name: "Small Businesses",
    tagline: "Built Right. Every Time.",
    Icon: Building2,
    description:
      "Need software built without cutting corners — security included from day one, not bolted on after. One team, complete accountability, end-to-end delivery.",
    accentFeature: "Full-Stack Secure Development",
    otherFeatures: [
      "Code auditing & hardening",
      "Secure deployment setup",
      "AI-powered security tooling",
      "End-to-end project ownership",
    ],
    cta: "Discuss Your Project",
    href: "/contact",
  },
  {
    number: "03",
    name: "Engineering Teams",
    tagline: "Shift Left. Build Confidence.",
    Icon: Code2,
    description:
      "Want to shift security left in your development workflow but don't know where to start. We integrate into your existing process and build a culture of security.",
    accentFeature: "CI/CD Security Integration",
    otherFeatures: [
      "GitHub Actions / GitLab CI",
      "Docker & Kubernetes hardening",
      "Security culture coaching",
      "DevSecOps roadmaps",
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const Icon = client.Icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-t border-white/8"
    >
      {/* Hover shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/0 to-transparent group-hover:via-[#3b82f6]/50 transition-all duration-500" />

      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 py-14 px-2 lg:px-0 items-start`}>

        {/* Number + name block */}
        <div className={`lg:col-span-5 ${isEven ? "" : "lg:col-start-8 lg:row-start-1"}`}>
          <div className="flex items-start gap-5">
            <span className="text-xs font-mono text-white/20 mt-1 select-none w-5 shrink-0">
              {client.number}
            </span>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#3b82f6]" />
                </div>
                <span className="text-xs font-mono tracking-widest text-[#3b82f6]/70 uppercase">
                  {client.tagline}
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white/90 group-hover:text-white transition-colors duration-200 mb-4">
                {client.name}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed max-w-sm">
                {client.description}
              </p>
              <Link href={client.href}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#3b82f6] hover:text-blue-300 transition-colors"
                >
                  {client.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        {/* Feature block */}
        <div
          className={`lg:col-span-5 ${
            isEven ? "lg:col-start-8" : "lg:col-start-1 lg:row-start-1"
          }`}
        >
          {/* Accent feature */}
          <div className="rounded-2xl border border-[#3b82f6]/20 bg-gradient-to-br from-[#3b82f6]/8 to-[#3b82f6]/2 p-6 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              <span className="text-xs font-mono text-[#3b82f6]/80 uppercase tracking-widest">
                Core offering
              </span>
            </div>
            <p className="text-xl font-bold text-white mt-2">{client.accentFeature}</p>
          </div>

          {/* Other features grid */}
          <div className="grid grid-cols-2 gap-3">
            {client.otherFeatures.map((f, fi) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: isEven ? 12 : -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + fi * 0.07 }}
                className="flex items-center gap-2 text-xs text-white/50 bg-white/[0.03] border border-white/8 rounded-xl px-3 py-2.5"
              >
                <div className="w-1 h-1 rounded-full bg-white/30 shrink-0" />
                {f}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#3b82f6]/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-[0.25em] text-white/40 uppercase mb-4"
          >
            Who We Work With
          </motion.p>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-transparent relative z-10">
            <RevealHeading text="Built for Teams That Take Security Seriously" />
          </h2>
        </div>

        {/* Client rows */}
        <div className="mt-8">
          {clients.map((c, i) => (
            <ClientRow key={c.name} client={c} index={i} />
          ))}
          <div className="border-t border-white/8" />
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/25 text-sm mt-10"
        >
          Every project is taken on end-to-end — design, development, testing, and deployment.
        </motion.p>
      </div>
    </section>
  )
}
