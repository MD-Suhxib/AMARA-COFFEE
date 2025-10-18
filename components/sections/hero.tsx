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
        className="relative min-h-screen w-full overflow-hidden"
        style={{
          backgroundColor: "#1a1410",
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0px, rgba(0, 0, 0, 0.45) 12px, rgba(26, 20, 16, 1) 12px, rgba(26, 20, 16, 1) 120px)",
          backgroundSize: "120px 100%",
        }}
        aria-label="AMARA COFFEE hero"
      >
        {/* Animated scroll indicator - hidden on mobile, visible on tablet+ */}
        <motion.div
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center hidden sm:flex"
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
            animate={{ height: [200, 400] }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* Top tagline - responsive text size and padding */}
        <motion.p
          className="pointer-events-none absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 text-[8px] sm:text-[10px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/90 z-30 text-center px-4"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          WHERE FINE TASTE MEETS A GREENER TOMORROW
        </motion.p>

        {/* Coffee beans - responsive positioning and sizing */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.img
            src="https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66952e8fa9955d9d2b113df9_realistic-coffee-bean%201.svg"
            alt=""
            className="absolute left-[5%] sm:left-[10%] top-1/2 -translate-y-1/2 w-[150px] sm:w-[250px] md:w-[350px] opacity-90"
            initial={{ y: -800, rotate: -60, opacity: 0 }}
            animate={{ y: 0, rotate: -33, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
          />

          <motion.img
            src="https://cdn.prod.website-files.com/6694f91706f861444dd250c0/66952e8fa9955d9d2b113df9_realistic-coffee-bean%201.svg"
            alt=""
            className="absolute right-[2%] sm:right-[8%] top-1/2 -translate-y-1/2 w-[200px] sm:w-[400px] md:w-[550px] opacity-90"
            initial={{ y: -900, rotate: 45, opacity: 0 }}
            animate={{ y: 0, rotate: 15, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          />
        </div>

        {/* Main content - responsive padding and spacing */}
        <div className="relative z-20 flex flex-col justify-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="overflow-hidden mb-8 sm:mb-12 md:mb-16 mt-12 sm:mt-16 md:mt-24 text-center">
            <motion.h1
              className="text-white leading-none"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: 'clamp(3rem, 12vw, 14rem)',
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
              className="text-white leading-none"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: 'clamp(3rem, 12vw, 14rem)',
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

          {/* Left-aligned paragraph - responsive max-width and text size */}
          <motion.div
            className="max-w-[600px] text-white/90 space-y-4 sm:space-y-6 mb-8 sm:mb-12 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed font-mono">
              Welcome to Amara, where every cup tells a story. Our journey began with a
              passion for exceptional coffee and a commitment to sustainability. From bean
              to brew, we meticulously craft each blend to deliver unparalleled flavor and
              aroma.
            </p>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed font-mono font-semibold">
              Join us as we explore the world of coffee, one cup at a time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}