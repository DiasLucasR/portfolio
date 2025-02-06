import Image from "next/image"
import { motion } from "framer-motion"
import { Parallax } from "react-parallax"

export default function About() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage="/placeholder.svg?height=1080&width=1920"
      bgImageAlt="Fundo abstrato"
      strength={200}
    >
      <motion.section
        id="sobre"
        className="min-h-screen flex items-center justify-center py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 backdrop-blur-sm bg-gray-900 bg-opacity-70 rounded-lg p-8">
          <h2 className="text-4xl font-bold mb-8 text-gradient">Sobre Mim</h2>
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
            <Image
              src="/placeholder.svg?height=250&width=250"
              alt="Foto do desenvolvedor"
              width={250}
              height={250}
              className="rounded-full border-4 border-blue-500"
            />
            <p className="text-xl leading-relaxed">
              Olá! Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Com experiência em várias
              tecnologias web, estou sempre buscando aprender e evoluir. Minha missão é transformar ideias em realidade
              através do código.
            </p>
          </div>
        </div>
      </motion.section>
    </Parallax>
  )
}

