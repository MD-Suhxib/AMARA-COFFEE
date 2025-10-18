"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const featuredProducts = [
  {
    title: "ARABICA ALL TYPES",
    desc: "Floral, citrus, delicate body",
    img: "/sack (1).png",
  },
  {
    title: "HOUSE ROAST CHOCOLATE ",
    desc: "Chocolate, Coffee, balanced",
    img: "/chocolate.png",
  },
]

const allProducts = [
  {
    id: 1,
    number: "[01]",
    name: "Arabica AA",
    description: "Arabica AA Coffee is a premium-grade coffee made from Coffea Arabica beans, known for their smooth flavor, balanced acidity, and aromatic richness. The “AA” grade refers to the bean size and quality—AA beans are the largest and most uniform, often considered the best in flavor and aroma. Grown at high altitudes, typically in volcanic or nutrient-rich soils, Arabica AA offers a refined taste profile with notes of chocolate, citrus, and floral undertones, making it a favorite among specialty coffee lovers.",
  },
  {
    id: 2,
    number: "[02]",
    name: "Robusta",
    description: "Robusta Coffee is made from Coffea canephora beans and is known for its strong, bold flavor and high caffeine content. Compared to Arabica, Robusta has a deeper, earthier taste with notes of wood, nuts, and dark chocolate, often accompanied by a slightly bitter edge.",
  },
  {
    id: 3,
    number: "[03]",
    name: "House Roast Chocolate",
    description: "House Roast Coffee Chocolate is a premium chocolate infused with the deep, aromatic essence of freshly roasted coffee. Crafted from fine cocoa and select coffee beans, it combines the smooth richness of chocolate with the bold, roasted flavor of coffee. Each bite delivers a harmonious balance of sweetness and bitterness, capturing the essence of a perfect house roast in chocolate form — a true treat for coffee and chocolate lovers alike.",
  },
  {
    id: 4,
    number: "[04]",
    name: "Hazelnut Harmony",
    description: "A smooth blend with delicate hazelnut notes. Creamy texture with a subtle nuttiness that makes every cup a delightful experience.",
  },
]

export default function Products() {
  const [expandedId, setExpandedId] = useState<number>(1)

  return (
    <>
      {/* Featured Products Section */}
      <section
        id="products"
        className="relative w-full overflow-hidden px-6 py-20 md:py-28"
        style={{
          backgroundColor: "#1a1410",
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0px, rgba(0, 0, 0, 0.45) 12px, rgba(26, 20, 16, 1) 12px, rgba(26, 20, 16, 1) 120px)",
          backgroundSize: "120px 100%",
        }}
      >
        {/* Left scroll indicator */}
        <motion.div
          className="absolute left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-4 h-4 bg-white rounded-full mb-6"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="w-1.5 bg-gradient-to-b from-white to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: 400 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Right scroll indicator */}
        <motion.div
          className="absolute right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-4 h-4 bg-white rounded-full mb-6"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="w-1.5 bg-gradient-to-b from-white to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: 400 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="mx-auto max-w-3xl scroll-mt-24">
          <div className="mb-12 flex items-end justify-between gap-4">
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight">
              Products by AMARA COFFEE
            </h2>
            <Link
              href="#contact"
              className="hidden rounded-full border border-white/30 px-4 py-2 text-sm text-white hover:bg-white/10 md:inline-block transition-colors"
            >
              Wholesale Enquiries
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {featuredProducts.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group overflow-hidden rounded-xl border border-white/20 bg-black/40 backdrop-blur-sm hover:border-white/40 transition-all"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.img || "/placeholder.svg"}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-xl text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-300">{p.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section
        id="all-products"
        className="w-full overflow-hidden py-6 md:py-10"
        style={{
          backgroundColor: "#1a1410",
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0px, rgba(0, 0, 0, 0.45) 12px, rgba(26, 20, 16, 1) 12px, rgba(26, 20, 16, 1) 120px)",
          backgroundSize: "120px 100%",
        }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Left: Product List */}
            <div className="space-y-0 md:col-span-2">
              {allProducts.map((product) => (
                <motion.div key={product.id}>
                  <motion.button
                    onClick={() => setExpandedId(expandedId === product.id ? 1 : product.id)}
                    className="w-full flex items-center justify-between py-6 px-0 border-b border-white/10 hover:border-white/20 transition-colors group text-left gap-4"
                  >
                    <div className="flex-1">
                      <h3 className="font-mono text-lg md:text-xl text-white group-hover:text-gray-200 transition-colors">
                        {product.number} {product.name}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === product.id ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 text-2xl text-white"
                    >
                      +
                    </motion.div>
                  </motion.button>

                  {/* Expanded Description */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      expandedId === product.id
                        ? { opacity: 1, height: "auto" }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-0 pb-6 pt-4 border-b border-white/10">
                      <p className="font-mono text-base text-gray-300 leading-relaxed max-w-3xl">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Right: Title */}
            <div className="relative hidden md:block md:col-span-1">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-32"
              >
                
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}