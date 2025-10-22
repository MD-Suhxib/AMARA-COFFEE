"use client"

import { motion } from "framer-motion"

export default function BehindBean() {
  return (
    <section
      id="behind"
      className="relative min-h-screen w-full overflow-hidden pt-0 pb-0 -mt-8 sm:-mt-12 md:-mt-12 lg:-mt-12 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 text-white"
      style={{
        backgroundColor: "#1a1410",
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0px, rgba(0, 0, 0, 0.45) 12px, rgba(26, 20, 16, 1) 12px, rgba(26, 20, 16, 1) 120px)",
        backgroundSize: "120px 100%",
      }}
    >
      {/* Animated scroll indicator - hidden on mobile */}
      <motion.div
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center hidden md:flex"
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

      {/* Floating Beans - optimized for mobile */}
      <div className="absolute inset-0 behind-beans pointer-events-none">
        <img
          src="https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66952e8fa9955d9d2b113df9_realistic-coffee-bean%201.svg"
          alt=""
          className="absolute left-[3%] xs:left-[5%] sm:left-[8%] md:left-[10%] top-[8%] xs:top-[10%] rotate-[-35deg] opacity-60 md:opacity-70 w-[60px] xs:w-[80px] sm:w-[120px] md:w-[150px] lg:w-[200px] h-auto"
        />
        <img
          src="https://cdn.prod.website-files.com/6694f91706f861444dd250c0/669cd4a20b910bdfe0a614a2_realistic-coffee-bean%203.svg"
          alt=""
          className="absolute left-[8%] xs:left-[12%] sm:left-[18%] md:left-[25%] top-[40%] xs:top-[45%] rotate-[20deg] opacity-60 md:opacity-70 w-[50px] xs:w-[65px] sm:w-[90px] md:w-[120px] lg:w-[160px] h-auto"
        />
        <img
          src="https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66952e8fa9955d9d2b113df9_realistic-coffee-bean%201.svg"
          alt=""
          className="absolute left-[1%] xs:left-[2%] sm:left-[3%] md:left-[5%] bottom-[8%] xs:bottom-[10%] rotate-[25deg] opacity-60 md:opacity-70 w-[70px] xs:w-[90px] sm:w-[130px] md:w-[160px] lg:w-[220px] h-auto"
        />
      </div>

      {/* Content - improved mobile layout */}
      <div className="relative z-10 max-w-full sm:max-w-4xl md:max-w-5xl w-full mx-auto sm:ml-auto sm:mr-0">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-extrabold uppercase leading-[0.9] xs:leading-[0.92] sm:leading-none tracking-tight text-center sm:text-left"
        >
          BEHIND THE <br />
          BEAN
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-5 xs:mt-6 sm:mt-7 md:mt-8 max-w-full sm:max-w-xl md:max-w-2xl text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-base text-gray-200 leading-relaxed text-center sm:text-left mx-auto sm:mx-0"
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