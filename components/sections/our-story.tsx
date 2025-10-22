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
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>

      <section
        id="story"
        className="relative w-full overflow-hidden -mt-8 sm:-mt-12 md:-mt-12 lg:-mt-12"
        style={{
          backgroundColor: "#1a1410",
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0px, rgba(0, 0, 0, 0.45) 12px, rgba(26, 20, 16, 1) 12px, rgba(26, 20, 16, 1) 120px)",
          backgroundSize: "120px 100%",
        }}
      >
        {/* Animated scroll indicator - hidden on mobile, visible on tablet+ */}
        <motion.div
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center hidden md:flex"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-3 md:w-4 h-3 md:h-4 bg-white rounded-full mb-4 md:mb-6"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          
          <motion.div
            className="w-1 md:w-1.5 bg-gradient-to-b from-white to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: [150, 300] }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Video Background */}
        <div className="relative w-full min-h-[50vh] xs:min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:h-[600px] overflow-hidden">
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
          <div className="relative z-10 flex flex-col justify-center h-full px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 max-w-[280px] xs:max-w-[320px] sm:max-w-[450px] md:max-w-[600px] mx-auto sm:mx-0 text-center sm:text-left">
            <motion.h2
              className="mb-4 xs:mb-5 sm:mb-6 md:mb-8 text-white leading-none"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: 'clamp(2rem, 10vw, 5rem)',
                fontWeight: 900,
                letterSpacing: '0.02em',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            >
              OUR STORY
            </motion.h2>
            <motion.p
              className="text-white/90 text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed font-mono"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              At AMARA COFFEE, our journey began with a passion for premium coffee and a commitment to sustainability. From
              sourcing the finest beans to supporting ethical practices, we're dedicated to crafting exceptional coffee and
              making a difference.
            </motion.p>
          </div>
        </div>

        {/* Story Cards Section */}
        <div
          className="w-full px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16"
          style={{
            backgroundColor: "#1a1410",
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0px, rgba(0, 0, 0, 0.45) 12px, rgba(26, 20, 16, 1) 12px, rgba(26, 20, 16, 1) 120px)",
            backgroundSize: "120px 100%",
          }}
        >
          <div className="mx-auto max-w-[280px] xs:max-w-[320px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[1200px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
              {storyCards.map((card, i) => (
                <motion.a
                  key={card.number}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                  className="group overflow-hidden rounded-lg hover:opacity-80 transition-opacity"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="text-white font-mono text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] mb-3 xs:mb-4 sm:mb-5">
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
    </>
  )
}