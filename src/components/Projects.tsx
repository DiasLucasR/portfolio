import { motion } from "framer-motion"

const projects = [
  { title: "Projeto 1", desc: "Descrição breve do projeto 1. Tecnologias utilizadas e resultados alcançados." },
  { title: "Projeto 2", desc: "Descrição breve do projeto 2. Tecnologias utilizadas e resultados alcançados." },
]

export default function Projects() {
  return (
    <motion.section
      id="projetos"
      className="min-h-screen flex items-center justify-center py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-gradient">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">{project.title}</h3>
              <p>{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

