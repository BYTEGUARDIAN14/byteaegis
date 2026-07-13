"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

export function StickyFooter() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 100
          setIsAtBottom(isNearBottom)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.div
          className="fixed z-50 bottom-0 left-0 w-full h-80 flex justify-center items-center"
          style={{
            backgroundColor: "#C9FF3F",
            borderTop: "3px solid #1E1D1B",
          }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div
            className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12"
            style={{ color: "#1E1D1B" }}
          >
            <motion.div
              className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ul className="space-y-2" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
                <li><a href="#services" className="footer-link">Services</a></li>
                <li><a href="#who-we-work-with" className="footer-link">Who We Help</a></li>
                <li><a href="#faq" className="footer-link">FAQ</a></li>
              </ul>
              <ul className="space-y-2" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
                <li><a href="https://github.com/BYTEGUARDIAN14" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a></li>
                <li><a href="https://byteaegis.online" target="_blank" rel="noopener noreferrer" className="footer-link">byteaegis.online</a></li>
                <li><a href="/contact" className="footer-link">Send an email</a></li>
              </ul>
            </motion.div>

            {/* Massive wordmark */}
            <motion.h2
              className="absolute bottom-0 left-0 translate-y-0 sm:text-[192px] text-[80px] font-bold select-none"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#1E1D1B",
                letterSpacing: "-0.04em",
                opacity: 1,
              }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              byteaegis
            </motion.h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
