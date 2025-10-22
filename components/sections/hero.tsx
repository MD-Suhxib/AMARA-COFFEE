"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>

      <section
        id="hero"
        className="relative min-h-screen w-full overflow-hidden pb-0"
        style={{
          backgroundColor: "#1a1410",
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0px, rgba(0, 0, 0, 0.45) 12px, rgba(26, 20, 16, 1) 12px, rgba(26, 20, 16, 1) 120px)",
          backgroundSize: "120px 100%",
        }}
        aria-label="AMARA COFFEE hero"
      >
        {/* Animated scroll indicator - visible on all devices with original styling */}
        <motion.div
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center"
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
            animate={{ height: [150, 300] }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* Top tagline - responsive */}
        <motion.p
          className="pointer-events-none absolute top-3 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-white/90 z-30 text-center px-3 sm:px-4"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          WHERE FINE TASTE MEETS A GREENER TOMORROW
        </motion.p>

        {/* Coffee beans - optimized for mobile to avoid overlap */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.img
            src="https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66952e8fa9955d9d2b113df9_realistic-coffee-bean%201.svg"
            alt=""
            className="absolute left-[2%] xs:left-[5%] sm:left-[8%] md:left-[10%] top-[45%] xs:top-[40%] -translate-y-1/2 w-[80px] xs:w-[100px] sm:w-[140px] md:w-[200px] lg:w-[300px] opacity-90"
            initial={{ y: -800, rotate: -60, opacity: 0 }}
            animate={{ y: 0, rotate: -33, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
          />

          <motion.img
            src="https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66952e8fa9955d9d2b113df9_realistic-coffee-bean%201.svg"
            alt=""
            className="absolute right-[0%] xs:right-[2%] sm:right-[5%] md:right-[8%] top-[45%] xs:top-[40%] -translate-y-1/2 w-[100px] xs:w-[120px] sm:w-[180px] md:w-[280px] lg:w-[400px] opacity-90"
            initial={{ y: -900, rotate: 45, opacity: 0 }}
            animate={{ y: 0, rotate: 15, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          />
        </div>

        {/* Main content - adjusted for mobile spacing */}
        <div className="relative z-20 flex flex-col justify-center min-h-screen px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 pb-8 sm:pb-12">
          <div className="overflow-hidden mb-2 xs:mb-4 sm:mb-6 md:mb-8 lg:mb-10 mt-10 xs:mt-12 sm:mt-14 md:mt-20 lg:mt-24 text-center">
            <motion.h1
              className="text-white leading-none"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: 'clamp(2rem, 12vw, 10rem)',
                fontWeight: 900,
                letterSpacing: '0.02em',
              }}
              initial={{ y: -500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.8, ease: [0.34, 1.56, 0.64, 1] }}
            >
              AMARA
            </motion.h1>

            <motion.h1
              className="text-white leading-none -mt-2 xs:-mt-3 sm:-mt-4 md:-mt-6"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: 'clamp(2rem, 12vw, 10rem)',
                fontWeight: 900,
                letterSpacing: '0.02em',
              }}
              initial={{ y: -500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2, ease: [0.34, 1.56, 0.64, 1] }}
            >
              COFFEE
            </motion.h1>
          </div>

          {/* Paragraph - increased margin to avoid merging */}
          <motion.div
            className="max-w-[280px] xs:max-w-[320px] sm:max-w-[450px] md:max-w-[600px] text-white/90 space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 mb-6 xs:mb-8 sm:mb-10 md:mb-12 text-center sm:text-left mx-auto sm:mx-0 mt-16 xs:mt-20 sm:mt-24 md:mt-28 lg:mt-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <p className="text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed font-mono">
              Welcome to Amara, where every cup tells a story. Our journey began with a
              passion for exceptional coffee and a commitment to sustainability. From bean
              to brew, we meticulously craft each blend to deliver unparalleled flavor and
              aroma.
            </p>
            <p className="text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed font-mono font-semibold">
              Join us as we explore the world of coffee, one cup at a time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}