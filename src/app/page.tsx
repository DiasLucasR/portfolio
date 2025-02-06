"use client"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedBackground from "@/components/AnimatedBackground"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import { LayoutProps } from "@/types/tipos"
import Footer from "@/components/Footer"
import Home from "@/components/paginas/Home"
import Sobre from "@/components/paginas/Sobre"


export default function Layout({ children }: LayoutProps) {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="flex flex-col min-h-screen relative">
    <AnimatedBackground />
    <main className="flex-grow z-10 container mx-auto px-4 py-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex flex-col justify-center align-middle items-center" >
        <TabsList className="grid grid-cols-2 w-2/6">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="sobre">About</TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Home setActiveTab={setActiveTab} />
            <Sobre />
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </main>
    <Footer />
  </div>
  )
}

