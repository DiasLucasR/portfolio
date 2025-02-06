import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/seu-usuario" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/seu-perfil" },
  { name: "Twitter", icon: FaTwitter, url: "https://twitter.com/seu-usuario" },
]

export default function Contact() {
  return (
    <motion.section
      id="contato"
      className="min-h-screen flex items-center justify-center py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gradient">Contato</h2>
        <p className="text-xl mb-8">Conecte-se comigo nas redes sociais:</p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-300 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

