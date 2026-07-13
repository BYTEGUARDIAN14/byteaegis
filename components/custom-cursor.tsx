"use client"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const isTouchDevice = useRef(false)

  useEffect(() => {
    // Disable entirely on touch/pointer-coarse devices (phones, tablets)
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      isTouchDevice.current = true
      return
    }

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    window.addEventListener("mousemove", move, { passive: true })
    document.documentElement.addEventListener("mouseleave", () => setVisible(false))
    document.documentElement.addEventListener("mouseenter", () => setVisible(true))

    return () => {
      window.removeEventListener("mousemove", move)
    }
  }, [])

  if (isTouchDevice.current) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed z-[99999] pointer-events-none hidden md:block"
          style={{
            top: pos.y,
            left: pos.x,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.12, ease: "easeOut" }}
        >
          <svg
            viewBox="0 0 16 16"
            className="h-7 w-7 -rotate-[70deg] transform"
            style={{ filter: "drop-shadow(2px 2px 0px #1E1D1B)" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
              fill="#C9FF3F"
              stroke="#1E1D1B"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
