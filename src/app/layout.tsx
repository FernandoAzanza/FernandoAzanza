import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google" // Import the font
import "./globals.css"

export const metadata: Metadata = {
  title: "Fernando Azanza | Portfolio",
  description: "Personal portfolio of Fernando Azanza - Software Engineer and Product Manager",
  generator: "v0.dev",
}

// Load the Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}> {/* Apply the font */}
      <body>{children}</body>
    </html>
  )
}

