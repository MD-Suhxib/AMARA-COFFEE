"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BehindBean() {
  return (
    <section
      id="behind"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 text-white"
      style={{
        backgroundColor: "#1a1410",
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0px, rgba(0, 0, 0, 0.45) 12px, rgba(26, 20, 16, 1) 12px, rgba(26, 20, 16, 1) 120px)",
        backgroundSize: "120px 100%",
      }}
    >
      {/* Animated scroll indicator - hidden on mobile, visible on tablet+ */}
      <motion.div
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center hidden sm:flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Dot */}
        <motion.div
          className="w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full mb-4 sm:mb-6"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        {/* Line extending down */}
        <motion.div
          className="w-1 sm:w-1.5 bg-gradient-to-b from-white to-transparent"
          initial={{ height: 0 }}
          whileInView={{ height: [200, 400] }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Floating Beans - responsive sizing and positioning */}
      <div className="absolute inset-0 behind-beans pointer-events-none">
        <Image
          src="https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66952e8fa9955d9d2b113df9_realistic-coffee-bean%201.svg"
          alt=""
          width={200}
          height={200}
          className="absolute left-[5%] sm:left-[10%] top-[10%] rotate-[-35deg] opacity-70 w-[100px] sm:w-[150px] md:w-[200px] h-auto"
        />
        <Image
          src="https://cdn.prod.website-files.com/6694f91706f861444dd250c0/669cd4a20b910bdfe0a614a2_realistic-coffee-bean%203.svg"
          alt=""
          width={160}
          height={160}
          className="absolute left-[15%] sm:left-[25%] top-[45%] rotate-[20deg] opacity-70 w-[80px] sm:w-[120px] md:w-[160px] h-auto"
        />
        <Image
          src="https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66952e8fa9955d9d2b113df9_realistic-coffee-bean%201.svg"
          alt=""
          width={220}
          height={220}
          className="absolute left-[2%] sm:left-[5%] bottom-[10%] rotate-[25deg] opacity-70 w-[110px] sm:w-[160px] md:w-[220px] h-auto"
        />
      </div>

      {/* Content - responsive alignment and spacing */}
      <div className="relative z-10 max-w-5xl w-full ml-auto mr-0">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold uppercase leading-none tracking-tight"
        >
          BEHIND THE <br />
          BEAN
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 max-w-2xl text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed"
        >
          Every cup of coffee tells a story, and at Roastery, we believe in honoring the journey of each bean. From the
          lush highlands of Ethiopia to the vibrant plantations of Colombia, our beans are meticulously sourced from the
          finest growers around the world. <br />
          <br />
          Meet the dedicated farmers who pour their heart and soul into cultivating the perfect coffee cherries.
          Discover the intricate process of harvesting, roasting, and blending that transforms these humble beans into
          the rich, aromatic brews you love.
        </motion.p>
      </div>
    </section>
  )
}