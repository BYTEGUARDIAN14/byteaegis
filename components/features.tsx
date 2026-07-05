"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { RevealHeading } from "@/components/ui/reveal-heading"
import { ArrowUpRight, Code2, ShieldCheck, GitBranch, Cloud, Brain, Smartphone } from "lucide-react"
import Link from "next/link"

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
          className="group relative border-t border-white/10 cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Hover background */}
          <motion.div
            className="absolute inset-0 bg-white/[0.03]"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />

          <div className="relative flex items-start gap-6 py-7 px-2">
            {/* Number */}
            <span className="text-xs font-mono text-white/30 mt-1 w-6 shrink-0 select-none">
              {service.id}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Arrow */}
                <motion.div
                  className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:border-blue-500/60 group-hover:text-blue-400 transition-colors duration-200"
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
                      <p className="text-sm sm:text-base text-white/50 max-w-2xl leading-relaxed">
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
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <p className="text-xs font-mono tracking-[0.25em] text-white/40 uppercase mb-4">
            Professional Offerings &amp; Specialized Skills
          </p>
          <RevealHeading>Services</RevealHeading>
        </div>

        {/* Service rows */}
        <div>
          {services.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex items-center justify-between"
        >
          <p className="text-sm text-white/30">
            Not sure what you need?{" "}
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4">
              Let&apos;s talk.
            </Link>
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="text-sm font-medium px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              Start a Project →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
