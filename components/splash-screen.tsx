"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : ""
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100000] flex items-center justify-center"
          style={{ backgroundColor: "#1E1D1B" }}
        >
          {/* Acid-green blinking cursor line as a loading indicator */}
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="w-16 h-16"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ backgroundColor: "#C9FF3F", WebkitMask: "url(/logo-blue.svg) center/contain no-repeat", mask: "url(/logo-blue.svg) center/contain no-repeat" }}
              aria-label="byteaegis Logo"
            />
            <motion.div
              className="flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "#C9FF3F" }}
              >
                byteaegis
              </span>
              <motion.span
                className="inline-block w-[2px] h-[14px] ml-1"
                style={{ backgroundColor: "#C9FF3F" }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
