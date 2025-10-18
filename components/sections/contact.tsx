"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Mail, MessageCircle } from "lucide-react"

export default function Contact() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-12 md:py-16 flex items-center justify-center"
      style={{
        backgroundColor: "#1a1410",
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0px, rgba(0, 0, 0, 0.45) 12px, rgba(26, 20, 16, 1) 12px, rgba(26, 20, 16, 1) 120px)",
        backgroundSize: "120px 100%",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs md:text-sm text-gray-400 mb-8 uppercase tracking-widest"
          >
            Get In Touch
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl uppercase leading-snug text-white tracking-tight font-black" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5), 4px 4px 8px rgba(0,0,0,0.3)', letterSpacing: '-0.02em', fontWeight: 900, WebkitTextStroke: '0.5px rgba(255,255,255,0.3)' }}>
              LET'S GET IN TOUCH<br />
              HAVE A<br />
              KOFFIE<br />
              ON US
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Questions, wholesale, or partnerships—drop your email and we'll get back to you with a fresh brew of ideas.
          </motion.p>

          <motion.form
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8"
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
              setTimeout(() => setSubmitted(false), 3000)
            }}
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 transition-colors font-mono text-sm"
              aria-label="Email address"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-white text-black font-semibold font-mono text-sm hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              {submitted ? "Thanks!" : "Notify Me"}
            </motion.button>
          </motion.form>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-gray-300 font-mono text-sm"
            >
              ✓ We'll reach out soon at {email}
            </motion.p>
          )}

          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center gap-4"
          >
            <motion.a
              href="https://instagram.com/amara_.coffee"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:amaracoffeeoriginals@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Gmail"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            {/* <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.a> */}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-white/10 text-gray-500 font-mono text-xs"
          >
            © {new Date().getFullYear()} AMARA COFFEE. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}