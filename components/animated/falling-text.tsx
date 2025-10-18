"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"

type FallingTextProps = {
  text: string
  className?: string
  // Optional: tweak animation feel per usage
  delayPerChar?: number
  initialYOffset?: number
}

export function FallingText({ text, className, delayPerChar = 0.04, initialYOffset = 120 }: FallingTextProps) {
  // Handle spaces elegantly so spacing is preserved
  const chars = React.useMemo(() => text.split(""), [text])

  return (
    <h1
      className={cn(
        // Large display like the reference; use tokens for color
        "font-serif font-bold leading-none text-foreground",
        "text-[18vw] md:text-[15vw] lg:text-[14vw]",
        className,
      )}
      aria-label={text}
    >
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: -initialYOffset, opacity: 0, rotateX: 15 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{
            delay: i * delayPerChar,
            type: "spring",
            damping: 20,
            stiffness: 280,
            mass: 0.6,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </h1>
  )
}
