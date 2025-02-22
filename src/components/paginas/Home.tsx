"use client"

import { Dispatch, SetStateAction } from "react"
import { TabsContent } from "@/components/ui/tabs"
import perfilImagem from '@/../public/images/perfil.png'
import Image from "next/image"
import { FaChevronRight, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { Button } from "../ui/button"
import { ProjectShowcase } from "../ProjectShowCase"

const socialLinks = [
  {
    href: "https://linkedin.com/in/lucasrdias",
    icon: <FaLinkedin size={30} />,
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
            <a href="mailto:lucasrafa2008@gmail.com" target="_blank"><p>
              <strong>Email:</strong> lucasrafa2008@gmail.com
            </p>
            </a>
            <a href="https://wa.me/5538991206281" target="_blank"><p>
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
            <Button className="my-3 p-5 rounded-3xl hover:bg-blue-950" variant="outline" onClick={() => setActiveTab('sobre')}>
              About Me <FaChevronRight />
            </Button>
          </div>
        </div>
      </section>

      <ProjectShowcase
       title = "Consumo da API Rick and Morty - Criando uma Wiki Completa"
       description =
         "Um projeto que utiliza a API Rick and Morty para criar uma Wiki interativa, apresentando dados sobre personagens, locais e outros detalhes do universo da série."
        images={[
          '/images/projeto_rick_morty/Home.png',
          '/images/projeto_rick_morty/AllLocations.png',
          '/images/projeto_rick_morty/detailsCitadel.png',
          '/images/projeto_rick_morty/allCharacter.png'
        ]}
        
        techStack={["Next.js", "TypeScript", "Tailwind CSS"]}
      />

    </TabsContent>
  )
}

