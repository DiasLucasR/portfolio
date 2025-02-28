import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Analytics } from '@vercel/analytics/next';


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucas Dias - Full-Stack Developer",
  description: "Full-stack developer. Passionate about building user-friendly and scalable web applications. Explore my portfolio for projects showcasing my expertise.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white`}>
      {children}
      <Analytics />
      </body>
    </html>
  )
}

