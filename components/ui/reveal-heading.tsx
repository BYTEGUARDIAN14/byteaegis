"use client"
import { motion } from "framer-motion"
import React from "react"

export function RevealHeading({ children }: { children: React.ReactNode }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const childVariant = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const renderWords = (content: React.ReactNode): React.ReactNode => {
    if (typeof content === "string") {
      return content.split(" ").map((word, i) => (
        <span key={i} className="inline-block mr-[0.25em] whitespace-nowrap">
          <motion.span className="inline-block" variants={childVariant}>
            {word}
          </motion.span>
        </span>
      ))
    }

    if (Array.isArray(content)) {
      return content.map((item, i) => <React.Fragment key={i}>{renderWords(item)}</React.Fragment>)
    }

    if (React.isValidElement(content)) {
      if (content.type === "br") {
        return content
      }
      return (
        <span className="inline-block mr-[0.25em] whitespace-nowrap">
          <motion.span className="inline-block" variants={childVariant}>
            {content}
          </motion.span>
        </span>
      )
    }

    return content
  }

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-center text-transparent relative z-10"
    >
      {renderWords(children)}
    </motion.h2>
  )
}
