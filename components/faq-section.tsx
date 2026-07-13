"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { RevealHeading } from "@/components/ui/reveal-heading"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What is byteaegis?",
      answer: (
        <div className="space-y-4">
          <p>
            byteaegis is a service-based cybersecurity and software development startup founded by Mohamed Adhnaan J M, a computer science student from Tamil Nadu, India.
          </p>
          <p>We work with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Startups who need security-focused software built for them.</li>
            <li>Small businesses who need their existing systems secured and hardened.</li>
            <li>Development teams seeking DevSecOps integration.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What services does byteaegis offer?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Secure Web & Desktop App Development:</strong> Full-stack builds with security built-in from day one.</li>
          <li><strong>Vulnerability Assessment & Code Auditing:</strong> Identifying security flaws in your codebase with prioritized remediation reports.</li>
          <li><strong>DevSecOps & CI/CD Pipeline Setup:</strong> Automating security scanning in your development workflow.</li>
          <li><strong>AI Integration for Security:</strong> Building AI-powered threat analysis and risk scoring tools.</li>
          <li><strong>Security Consulting:</strong> Advising teams on best practices, penetration testing, and cloud hardening.</li>
        </ul>
      ),
    },
    {
      question: "Who does byteaegis work with?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Early-stage startups</strong> shipping fast who need a security-aware development partner.</li>
          <li><strong>Small businesses</strong> that need software built without cutting corners on security.</li>
          <li><strong>Engineering teams</strong> that want to shift security left in their development process but don't know where to start.</li>
        </ul>
      ),
    },
    {
      question: "How does byteaegis handle projects end-to-end?",
      answer: (
        <div className="space-y-4">
          <p>
            We handle the full scope of work, from requirement gathering to delivery. This includes design, development, testing, and deployment.
          </p>
          <p>
            Clients don't need to coordinate between multiple agencies or freelancers. We take ownership of the entire engagement to ensure security and quality are never compromised.
          </p>
        </div>
      ),
    },
    {
      question: "How do I get started with byteaegis?",
      answer: (
        <div className="space-y-4">
          <p>
            Simply reach out via our contact page. Describe your project or security challenge and we'll get back to you to discuss next steps.
          </p>
          <p>
            You can also find us on GitHub at <strong>github.com/BYTEGUARDIAN14</strong>.
          </p>
        </div>
      ),
    },
  ]

  return (
    <section id="faq" className="relative overflow-hidden pb-24 pt-24" style={{ backgroundColor: "#1E1D1B" }}>
      <div className="z-10 container mx-auto px-4">

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              border: "2px solid #C9FF3F",
              color: "#C9FF3F",
              fontSize: "11px",
              letterSpacing: "0.1em",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <span>Faqs</span>
          </div>
        </motion.div>

        <motion.h2
          className="mx-auto mt-6 mb-8 text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black uppercase tracking-tighter leading-none text-center relative z-10"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1" }}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0 }}
          viewport={{ once: true }}
        >
          <RevealHeading text="Common Questions" delay={0.1} />
        </motion.h2>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="cursor-pointer transition-all duration-150"
              style={{
                backgroundColor: "#2A2825",
                border: openItems.includes(index) ? "2px solid #C9FF3F" : "2px solid #3D3B37",
                boxShadow: openItems.includes(index) ? "4px 4px 0px 0px #C9FF3F" : "4px 4px 0px 0px #3D3B37",
                padding: "24px",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => toggleItem(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  toggleItem(index)
                }
              }}
            >
              <div className="flex items-start justify-between">
                <h3
                  className="m-0 font-bold pr-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1", letterSpacing: "-0.02em" }}
                >
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {openItems.includes(index) ? (
                    <Minus className="flex-shrink-0 transition duration-300" size={20} style={{ color: "#C9FF3F" }} />
                  ) : (
                    <Plus className="flex-shrink-0 transition duration-300" size={20} style={{ color: "#C9FF3F" }} />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    className="overflow-hidden"
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#8A8680", lineHeight: "1.7" }}
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut", opacity: { duration: 0.2 } }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
