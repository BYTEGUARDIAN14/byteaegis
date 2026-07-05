"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import React from "react"

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
  staggerDelay = 0.02,
}: RevealHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0 })
  
  const words = text.split(" ")
  let charCount = 0

  return (
    <span ref={ref} aria-label={text} className={cn("inline-block", className)}>
      {words.map((word, wordIndex) => {
        const isLastWord = wordIndex === words.length - 1
        const wordChars = word.split("")
        const startIndex = charCount
        charCount += wordChars.length + 1 // +1 for the space

        return (
          <React.Fragment key={wordIndex}>
            <span className="inline-block whitespace-nowrap">
              {wordChars.map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: delay + (startIndex + charIndex) * staggerDelay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {!isLastWord && " "}
          </React.Fragment>
        )
      })}
    </span>
  )
}
