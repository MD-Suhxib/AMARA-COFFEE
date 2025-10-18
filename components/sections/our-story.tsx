"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const storyCards = [
  {
    number: "[01]",
    title: "How We Started",
    img: "https://cdn.prod.website-files.com/6694f91706f861444dd250c0/669d294202fb552a4aced28d_Rectangle%2019.webp",
  },
  {
    number: "[02]",
    title: "Sustainable Agriculture",
    img: "https://cdn.prod.website-files.com/6694f91706f861444dd250c0/669d2942494c46ae897292be_Rectangle%2020.webp",
  },
  {
    number: "[03]",
    title: "Mastering The Technique",
    img: "https://cdn.prod.website-files.com/6694f91706f861444dd250c0/669d2942f81587ab046236f7_Rectangle%2021.webp",
  },
  {
    number: "[04]",
    title: "Oven To Pot (or Machine)",
    img: "https://cdn.prod.website-files.com/6694f91706f861444dd250c0/669d2942629dffa32ef4e171_Rectangle%2022.webp",
  },
]

export default function OurStory() {
  return (
    <section id="story" className="relative w-full overflow-hidden">
      {/* Video Background */}
      <div className="relative w-full h-screen md:h-[600px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 max-w-3xl">
          <motion.h2
            className="mb-6 font-serif text-4xl md:text-6xl text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.h2>
          <motion.p
            className="text-pretty text-white/90 text-base md:text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            At AMARA COFFEE, our journey began with a passion for premium coffee and a commitment to sustainability. From
            sourcing the finest beans to supporting ethical practices, we're dedicated to crafting exceptional coffee and
            making a difference.
          </motion.p>
        </div>
      </div>

      {/* Story Cards Section */}
      <div
        className="w-full px-6 py-16 md:py-24"
        style={{
          backgroundColor: "#1a1410",
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0px, rgba(0, 0, 0, 0.45) 12px, rgba(26, 20, 16, 1) 12px, rgba(26, 20, 16, 1) 120px)",
          backgroundSize: "120px 100%",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {storyCards.map((card, i) => (
              <motion.a
                key={card.number}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group overflow-hidden rounded-lg hover:opacity-80 transition-opacity"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-white font-mono text-sm md:text-base mb-3">
                    {card.number}. {card.title}
                  </h3>
                  <div className="relative w-full aspect-[3/5] overflow-hidden rounded-lg">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}