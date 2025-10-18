"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const items = [
  { href: "#behind", label: "Behind The Bean" },
  { href: "#story", label: "Our Story" },
  { href: "#products", label: "Products" },
  // { href: "#sustainability", label: "Sustainability" },
  { href: "#contact", label: "Contact Us" },
]

export function FloatingNav() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 120)
      lastY = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      aria-label="Section navigation"
      className={cn(
        "fixed inset-x-0 bottom-5 z-50 flex justify-center transition-all duration-300",
        hidden ? "translate-y-24 opacity-0" : "translate-y-0 opacity-100",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center gap-10 rounded-lg px-10 py-3 text-sm text-white shadow-lg backdrop-blur-xl",
          "bg-white/10 border border-white/20",
          "hover:shadow-white/10 transition-all duration-300"
        )}
      >
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="px-2 py-1 transition-colors hover:text-white/80"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
