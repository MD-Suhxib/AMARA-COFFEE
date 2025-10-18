import { FloatingNav } from "@/components/floating-nav"
import Hero from "@/components/sections/hero"
import BehindBean from "@/components/sections/behind-bean"
import OurStory from "@/components/sections/our-story"
import Products from "@/components/sections/products"
// import Sustainability from "@/components/sections/sustainability"
import Contact from "@/components/sections/contact"

export default function Page() {
  return (
    <main>
      <Hero />
      <BehindBean />
      <OurStory />
      <Products />
      {/* <Sustainability /> */}
      <Contact />
      <FloatingNav />
    </main>
  )
}
