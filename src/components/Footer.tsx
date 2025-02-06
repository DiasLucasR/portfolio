import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-gray-800 text-white p-4 mt-8"
    >
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Meu Portfólio. Todos os direitos reservados.</p>
      </div>
    </motion.footer>
  )
}

