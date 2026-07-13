"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Code2, ShieldCheck, GitBranch, Cloud, Brain, Smartphone } from "lucide-react"
import Link from "next/link"
import { RevealHeading } from "@/components/ui/reveal-heading"

const services = [
  {
    id: "01",
    title: "Secure Full-Stack Development",
    description:
      "We build web applications and desktop software from scratch with security baked in from day one — not reviewed after the fact. We own the entire stack, from database schema to frontend UI.",
    icon: Code2,
    href: "/contact",
  },
  {
    id: "02",
    title: "Vulnerability Assessment & Code Auditing",
    description:
      "We review your codebase and identify security vulnerabilities, exposed credentials, insecure dependencies, and risky patterns. You get a prioritized report with clear remediation steps.",
    icon: ShieldCheck,
    href: "/contact",
  },
  {
    id: "03",
    title: "DevSecOps & CI/CD Pipeline Design",
    description:
      "We set up automated security pipelines so every commit is scanned before hitting production. We work with GitHub Actions, GitLab CI, and Docker-based workflows.",
    icon: GitBranch,
    href: "/contact",
  },
  {
    id: "04",
    title: "Cloud Security & Infrastructure as Code",
    description:
      "We audit and harden your cloud infrastructure on AWS, GCP, or Azure — misconfiguration reviews, IAM audits, secrets management, and Terraform/Pulumi IaC security.",
    icon: Cloud,
    href: "/contact",
  },
  {
    id: "05",
    title: "AI Integration for Security Workflows",
    description:
      "We build AI-powered tooling into your security workflows — automated threat analysis, intelligent scan summarization, risk scoring, and AI-assisted remediation using cloud or local models.",
    icon: Brain,
    href: "/contact",
  },
  {
    id: "06",
    title: "Mobile App Development",
    description:
      "We develop cross-platform mobile applications with security-first architecture. From authentication flows to secure data storage and encrypted API communication.",
    icon: Smartphone,
    href: "/contact",
  },
]

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link href={service.href}>
        <div
          className="group relative cursor-pointer"
          style={{ borderTop: "1px solid #3D3B37" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Hover background */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "#2A2825" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.15 }}
          />

          <div className="relative flex items-start gap-6 py-7 px-2">
            {/* Number */}
            <span
              className="mt-1 w-6 shrink-0 select-none text-xs"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "#C9FF3F", opacity: 0.7 }}
            >
              {service.id}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-4">
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-200"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: hovered ? "#C9FF3F" : "#E8E6E1",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {service.title}
                </h3>

                {/* Arrow */}
                <motion.div
                  className="shrink-0 w-10 h-10 flex items-center justify-center transition-colors duration-200"
                  style={{
                    border: `2px solid ${hovered ? "#C9FF3F" : "#3D3B37"}`,
                    color: hovered ? "#C9FF3F" : "#8A8680",
                    boxShadow: hovered ? "3px 3px 0px 0px #C9FF3F" : "none",
                  }}
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
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4">
                      <p
                        className="text-sm sm:text-base max-w-2xl leading-relaxed"
                        style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#8A8680" }}
                      >
                        {service.description}
                      </p>
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

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="services" className="relative py-24 sm:py-32" style={{ backgroundColor: "#1E1D1B" }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

        {/* Header */}
        <motion.div ref={ref} className="mb-16 sm:mb-20">
          <p
            className="uppercase mb-4 text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "#C9FF3F", letterSpacing: "0.25em", opacity: 0.8 }}
          >
            Professional Offerings &amp; Specialized Skills
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black uppercase tracking-tighter leading-none text-center relative z-10"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1" }}
          >
            <RevealHeading text="Services" delay={0.1} />
          </h2>
        </motion.div>

        {/* Service rows */}
        <div>
          {services.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: "1px solid #3D3B37" }} />
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex items-center justify-between"
        >
          <p
            className="text-sm"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#8A8680" }}
          >
            Not sure what you need?{" "}
            <Link
              href="/contact"
              className="underline underline-offset-4 transition-colors"
              style={{ color: "#C9FF3F" }}
            >
              Let&apos;s talk.
            </Link>
          </p>
          <Link href="/contact">
            <button
              className="text-sm font-bold px-5 py-2.5 transition-all duration-100"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                backgroundColor: "#C9FF3F",
                color: "#1E1D1B",
                border: "2px solid #C9FF3F",
                boxShadow: "3px 3px 0px 0px rgba(0,0,0,0.5)",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "translate(-2px,-2px)"
                el.style.boxShadow = "5px 5px 0px 0px rgba(0,0,0,0.5)"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "translate(0,0)"
                el.style.boxShadow = "3px 3px 0px 0px rgba(0,0,0,0.5)"
              }}
            >
              Start a Project →
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
