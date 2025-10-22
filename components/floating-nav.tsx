"use client"

import { useEffect, useState } from "react"

const items = [
  { href: "#behind", label: "Behind The Bean" },
  { href: "#story", label: "Our Story" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact Us" },
]

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

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
        "fixed inset-x-0 bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-5 z-50 flex justify-center px-2 xs:px-3 sm:px-4 transition-all duration-300",
        hidden ? "translate-y-24 opacity-0" : "translate-y-0 opacity-100",
      )}
    >
      <div
        className={cn(
          "flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-5 lg:gap-8 rounded-lg px-3 xs:px-4 sm:px-5 md:px-7 lg:px-10 py-2 xs:py-2.5 sm:py-3 text-white shadow-lg backdrop-blur-xl",
          "bg-white/10 border border-white/20",
          "hover:shadow-white/10 transition-all duration-300",
          "max-w-[95vw] sm:max-w-none"
        )}
      >
        {items.map((it) => (
          <a
            key={it.href}
            href={it.href}
            className="px-1.5 xs:px-2 sm:px-2.5 md:px-3 py-1 transition-colors hover:text-white/80 whitespace-nowrap text-[10px] xs:text-[11px] sm:text-xs md:text-sm"
          >
            {it.label}
          </a>
        ))}
      </div>
    </nav>
  )
}