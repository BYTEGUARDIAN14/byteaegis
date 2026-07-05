"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface RevealHeadingProps {
  text: string
  className?: string
  delay?: number
  /** Stagger per character in seconds. Default 0.022 */
  staggerDelay?: number
}

export function RevealHeading({
  text,
  className,
  delay = 0,
  staggerDelay = 0.022,
}: RevealHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })
  const chars = text.split("")

  return (
    <span ref={ref} aria-label={text} className={cn("", className)}>
      {chars.map((char, i) =>
        char === " " ? (
          /* Preserve spaces as non-breaking so line-wrap still works */
          <span key={i} className="inline-block select-none">&nbsp;</span>
        ) : (
          <span
            key={i}
            /* overflow-hidden clips the slide-up; extra padding-bottom prevents descender crop */
            className="inline-block overflow-hidden"
            style={{ paddingBottom: "0.12em", marginBottom: "-0.12em", lineHeight: "inherit" }}
          >
            <motion.span
              className="inline-block"
              style={{ willChange: "transform" }}
              initial={{ y: "110%", opacity: 0 }}
              animate={
                isInView
                  ? { y: "0%", opacity: 1 }
                  : { y: "110%", opacity: 0 }
              }
              transition={{
                duration: 0.42,
                delay: delay + i * staggerDelay,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char}
            </motion.span>
          </span>
        )
      )}
    </span>
  )
}
