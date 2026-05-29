"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [visible,  setVisible]  = useState(false)
  const [hovering, setHovering] = useState(false)
  const [label,    setLabel]    = useState("")

  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)
  // Spring, same values as FollowerPointerCard
  const sx = useSpring(mx, { stiffness: 150, damping: 15, mass: 0.1 })
  const sy = useSpring(my, { stiffness: 150, damping: 15, mass: 0.1 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      setVisible(true)
    }

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      const link    = t.closest("a")
      const button  = t.closest("button")
      const roleBtn = t.closest("[role='button']")
      if (link || button || roleBtn) {
        setHovering(true)
        setLabel(
          link?.getAttribute("aria-label") ||
          button?.textContent?.trim().slice(0, 20) ||
          ""
        )
      } else {
        setHovering(false)
        setLabel("")
      }
    }

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", over)
    document.documentElement.addEventListener("mouseleave", () => setVisible(false))
    document.documentElement.addEventListener("mouseenter", () => setVisible(true))

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", over)
    }
  }, [mx, my])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed z-[99999] pointer-events-none"
          style={{ top: sy, left: sx, translateX: "-50%", translateY: "-50%" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
          <div className="flex items-center pointer-events-none">
            {/* Exact same arrow from FollowerPointerCard */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="1"
              viewBox="0 0 16 16"
              className="h-6 w-6 -rotate-[70deg] transform stroke-blue-400 text-blue-500 drop-shadow-lg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
            </svg>

            {/* Label pill, appears on hoverable elements */}
            <AnimatePresence>
              {hovering && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1,   opacity: 1 }}
                  exit={{ scale: 0.5,    opacity: 0 }}
                  className="ml-2 min-w-max rounded-full px-2 py-1 text-xs whitespace-nowrap text-white shadow-lg border border-white/20"
                  style={{ backgroundColor: "#3b82f6" }}
                >
                  {label || "byteaegis"}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
