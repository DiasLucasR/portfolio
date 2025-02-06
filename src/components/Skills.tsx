import { motion } from "framer-motion"

const skills = ["JavaScript", "React", "Next.js", "Node.js", "TypeScript", "HTML/CSS"]

export default function Skills() {
  return (
    <motion.section
      id="habilidades"
      className="min-h-screen flex items-center justify-center py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-gradient">Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

