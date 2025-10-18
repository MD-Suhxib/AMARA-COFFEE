import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AMARA COFFEE",
  description:
    "AMARA COFFEE — a coffee brand with the promise of sustainable agriculture. Behind the bean, our story, products, and more.",
  generator: "v0.app",
  icons: {
    icon: "/fav-icon.png", // Add your favicon here
    shortcut: "/favicon-16x16.png", // Optional: smaller favicon
    apple: "/apple-touch-icon.png", // Optional: iOS icon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} antialiased scroll-smooth`}
    >
      <body className="font-sans bg-background text-foreground">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}