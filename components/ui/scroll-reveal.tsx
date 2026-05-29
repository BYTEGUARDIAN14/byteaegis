"use client"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import React, { useRef } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
}

export const ScrollReveal = ({ children, className }: ScrollRevealProps) => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"],
    })

    const words = typeof children === "string" ? children.split(" ") : []

    if (words.length === 0) {
        return (
            <div ref={container} className={className}>
                {children}
            </div>
        )
    }

    return (
        <p ref={container} className={cn("flex flex-wrap gap-x-1.5", className)}>
            {words.map((word, i) => {
                const start = i / words.length
                const end = start + 1 / words.length
                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                    </Word>
                )
            })}
        </p>
    )
}

const Word = ({ children, progress, range }: { children: React.ReactNode; progress: MotionValue<number>; range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.1, 1])

    return (
        <span className="relative">
            <span className="absolute opacity-10">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    )
}
