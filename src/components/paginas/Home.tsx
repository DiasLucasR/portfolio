"use client"

import { Dispatch, SetStateAction, useState, type ReactNode } from "react"
import { TabsContent } from "@/components/ui/tabs"
import perfilImagem from '@/../public/images/perfil.png'
import Image from "next/image"
import { FaChevronRight, FaCogs, FaDatabase, FaDocker, FaGit, FaGithub, FaInstagram, FaJs, FaLanguage, FaLinkedin, FaLinux, FaNodeJs, FaPhp, FaReact, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiRemix, SiMysql, SiPostgresql, SiLaravel, SiJquery } from "react-icons/si";
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"

const socialLinks = [
  {
    href: "https://linkedin.com/in/lucasrdias",
    icon: <FaLinkedin size={30}  />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/DiasLucasR",
    icon: <FaGithub size={30} />,
    label: "GitHub",
  },
  {
    href: "https://wa.me/5538991206281",
    icon: <FaWhatsapp size={30} />,
    label: "WhatsApp",
  }
];
const projetos = [
  { title: "Projeto 1", descricao: "Breve descrição do Projeto 1", stack: "TypeScript, React.Js" },
  { title: "Projeto 2", descricao: "Breve descrição do Projeto 2", stack: "TypeScript, React.Js" },
];

const technologies = [
  {
    category: "Languages, Frameworks & Librarys",
    items: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-4xl" /> },
      { name: "PHP", icon: <FaPhp className="text-purple-700 text-4xl" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
      { name: "React.js", icon: <FaReact className="text-blue-400 text-4xl" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
      { name: "Remix", icon: <SiRemix className="text-indigo-600 text-4xl" /> },
      { name: "React Native", icon: <FaReact className="text-blue-400 text-4xl" /> },
      { name: "AngularJS", icon: <FaCogs className="text-red-600 text-4xl" /> },
      { name: "Laravel", icon: <SiLaravel className="text-red-700 text-4xl" /> },
      { name: "Lumen", icon: <SiLaravel className="text-orange-500 text-4xl" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "SQL", icon: <FaDatabase className="text-gray-700 text-4xl" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600 text-4xl" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 text-4xl" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Docker", icon: <FaDocker className="text-blue-500 text-4xl" /> },
      { name: "Docker Compose", icon: <FaDocker className="text-blue-300 text-4xl" /> },
      { name: "Git", icon: <FaGithub className="text-orange-500 text-4xl" /> },
      { name: "Linux", icon: <FaLinux className="text-gray-700 text-4xl" /> },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "English (C2)", icon: <FaLanguage className="text-green-600 text-4xl" /> },
      { name: "Portuguese (Native)", icon: <FaLanguage className="text-green-600 text-4xl" /> },
    ],
  },
];

interface HomeProps {
  setActiveTab: Dispatch<SetStateAction<string>>;

}

export default function Home({ setActiveTab }: HomeProps) {

  return (
    <TabsContent value="home" className="mt-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gradient">Full Stack Developer</h1>
        <p className="text-md">
          Full-Stack Developer with solid experience in JavaScript, TypeScript, React.js, Node.js, and RESTful API integration.
          Specialized in building microservices, automating workflows, and developing scalable solutions using modern frameworks like Next.js,
          Remix, and Laravel.</p>
      </section>

      <section className="mb-12">
        <div className="flex items-center space-x-6">
          <Image
            src={perfilImagem}
            alt="Foto do desenvolvedor"
            width={150}
            height={150}
            className="rounded-full border-4 border-blue-500"
          />
          <div>
            <p>
              Lucas Dias
            </p>
            <a href="mailto:lucasrafa2008@gmail.com"  target="_blank"><p>
              <strong>Email:</strong> lucasrafa2008@gmail.com
            </p>
            </a>
            <a href="https://wa.me/5538991206281"  target="_blank"><p>
              <strong>Phone:</strong> +55 (38) 99120-6281
            </p>
            </a>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={`redes-${index}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-450 transition transform hover:scale-150"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <Button className="my-3 p-5 rounded-3xl hover:bg-blue-950"  variant="outline" onClick={() => setActiveTab('sobre')}>
              About Me <FaChevronRight  />
              </Button>
          </div>
        </div>
      </section>

      {/* <section>
          <h2 className="text-3xl font-bold mb-4 text-gradient">Projetos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projetos.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover-lift">
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p>{project.descricao}</p>
                <p>
                  <h5 className="text-sm">Stack</h5>
                  <h6 className="text-xs">
                  {project.stack}
                  </h6>
                </p>
              </div>
            ))}
          </div>
        </section> */}
      <section>
        <div className="container mx-auto ">
          <Card className="mb-6  bg-transparent">
            <CardContent >
              {technologies.map((tech, index) => (
                <div key={`icones-stack-${index}`}>
                  <h2 className="text-xl font-bold mb-4 mt-4">{tech.category}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {tech.items.map((item) => (
                      <div key={item.name} className="flex flex-col items-center text-center hover:scale-110">
                        {item.icon}
                        <span className="mt-2 text-sm font-medium">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>))}

            </CardContent>
          </Card>
        </div>
      </section>

    </TabsContent>
  )
}

