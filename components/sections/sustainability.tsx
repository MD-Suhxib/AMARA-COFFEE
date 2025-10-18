"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const images = [
  "https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66a20d3c08cd1069706c7bf9_Rectangle%2019.avif",
  "https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66a213862c9f0a814b8e8701_Rectangle%2022.avif",
  "https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66a21386b3eb9499a5391124_Rectangle%2021.avif",
  "https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66a21386420b5e93367c81ce_Rectangle%2020.avif",
  "https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66a213866ce48f05259a2039_Rectangle%2025.avif",
  "https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66a213865f2b37ea8086653b_Rectangle%2026.avif",
  "https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66a21386865dd5919716b607_Rectangle%2023.avif",
  "https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66a213856ce48f05259a2009_Rectangle%2024.avif",
]

export default function Sustainability() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % (images.length * 4))
    }, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="sustainability"
      className="w-full overflow-hidden"
      style={{
        backgroundColor: "#1a1410",
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0px, rgba(0, 0, 0, 0.45) 12px, rgba(26, 20, 16, 1) 12px, rgba(26, 20, 16, 1) 120px)",
        backgroundSize: "120px 100%",
      }}
    >
      {/* Content section */}
      <div className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl space-y-4"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight">
            Our Promise for Sustainable Agriculture
          </h2>
          <p className="text-gray-200 text-base md:text-lg">
            We partner with growers for fair pricing, invest in resilient farming, and roast with efficiency to minimize
            waste. Join us in protecting the future of coffee.
          </p>
        </motion.div>
      </div>

      {/* Full-width carousel loop */}
      <div className="w-full overflow-hidden py-12 md:py-16">
        <motion.div
          className="flex gap-4 px-6"
          animate={{ x: `-${offset * 15}%` }}
          transition={{ ease: "linear", duration: 0 }}
        >
          {[...images, ...images, ...images, ...images].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 md:w-[28rem] h-56 md:h-64 overflow-hidden rounded-lg border border-white/20"
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}