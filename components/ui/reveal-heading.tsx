"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface RevealHeadingProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export function RevealHeading({
  text,
  className,
  delay = 0,
  staggerDelay = 0.08,
}: RevealHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const words = text.split(" ")

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap justify-center gap-x-[0.25em] gap-y-0", className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{
              duration: 0.55,
              delay: delay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
