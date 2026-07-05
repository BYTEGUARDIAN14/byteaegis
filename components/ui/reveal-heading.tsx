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
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const chars = text.split("")

  return (
    <span ref={ref} aria-label={text} className={cn("", className)}>
      {chars.map((char, i) =>
        char === " " ? (
          <span key={i} className="inline-block select-none">&nbsp;</span>
        ) : (
          /*
           * No overflow:hidden here — that breaks background-clip:text on the parent h2.
           * Instead we use clipPath to mask the reveal so the gradient stays intact.
           * inset(0 -5% -25% 0) extends bottom/sides beyond the glyph bounds to
           * avoid clipping descenders and italic overhang.
           */
          <motion.span
            key={i}
            className="inline-block"
            style={{ willChange: "clip-path, opacity" }}
            initial={{ clipPath: "inset(0% -5% 100% -5%)", opacity: 0 }}
            animate={
              isInView
                ? { clipPath: "inset(0% -5% -25% -5%)", opacity: 1 }
                : { clipPath: "inset(0% -5% 100% -5%)", opacity: 0 }
            }
            transition={{
              duration: 0.5,
              delay: delay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {char}
          </motion.span>
        )
      )}
    </span>
  )
}
