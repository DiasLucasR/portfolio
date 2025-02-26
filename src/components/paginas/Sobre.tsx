import { TabsContent } from "@/components/ui/tabs"
import { FaCogs, FaDatabase, FaDocker, FaGithub, FaJs, FaLanguage, FaLinux, FaNodeJs, FaPhp, FaReact } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiRemix, SiMysql, SiPostgresql, SiLaravel } from "react-icons/si";
import { Card, CardContent } from "../ui/card";

const experiencias = [
  {
    "empresa": "CerradoCode", "cargo": "Full-Stack Developer", "descricao": [
      { texto: "Developed and implemented web applications using JavaScript, Node.js, React.js, Next.js, and Remix, delivering efficient and functional solutions." },
      { texto: "Built web applications with JavaScript, Node.js, React.js, Next.js, and Remix, delivering efficient and functional solutions." },
      { texto: "Leveraged AWS Serverless Framework to create scalable architectures, reducing operational costs and increasing application availability." },
      { texto: "Integrated third-party systems and APIs, ensuring a seamless and consistent user experience." },
      { texto: "Actively participated in all phases of the development lifecycle, from planning to delivery, ensuring quality and adherence to deadlines." }
    ]
  },
  {
    "empresa": "Dommus Tecnologia", "cargo": "Full-Stack Developer", "descricao": [
      { texto: "Developed and implemented ERP integrations using REST APIs, automating workflows and reducing manual processing time." },
      { texto: "Built web applications with JavaScript, Node.js, React.js, Next.js, and Remix, delivering efficient and functional solutions." },
      { texto: "Integrated partner systems via REST and XML APIs, improving data exchange efficiency by 25% and reducing response times." },
      { texto: "Implemented financial institution integrations for automated invoice generation, speeding up the process. " },
      { texto: "Architected and developed microservices using Laravel Lumen and Docker, increasing deployment speed by 25% and enhancing system reliability." },
      { texto: "Added new features and resolved bugs in existing systems, optimizing performance and reducing user-reported issues." },
    ]
  },
  {
    "empresa": "SEG Tecnologia", "cargo": "Telecommunications Analyst", "descricao": [
      { texto: "Managed and maintained Asterisk-based CPaaS communication services (VoIP), ensuring high system availability and consistent performance." },
      { texto: "Optimized and customized system code, increasing operational efficiency." },
      { texto: "Configured new clients within the communication environment, reducing onboarding time" },
      { texto: "Configured new clients within the communication environment, reducing onboarding time" },
      { texto: "Provided specialized technical support, including code adjustments, to ensure service continuity and resolve communication issues promptly." },
    ]
  },
  {
    "empresa": "Universidade Estadual de Montes Claros",
    "cargo": "Estágio",
    "descricao": [
      { "texto": "Designed and developed websites and internal systems using PHP frameworks (CodeIgniter, Laravel), delivering efficient and scalable solutions." },
      { "texto": "Created and optimized systems to streamline internal processes, improving operational efficiency." },
      { "texto": "Monitored and maintained campus network infrastructure using Zabbix on Linux environments, ensuring high availability and performance." },
      { "texto": "Assisted users with technical issues, providing timely resolutions and ensuring smooth operations." },
      { "texto": "Gained hands-on experience with Linux-based systems for server management and troubleshooting." }
    ]
  }  
];


const skills = [
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
  { name: "SQL", icon: <FaDatabase className="text-gray-700 text-4xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 text-4xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 text-4xl" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500 text-4xl" /> },
  { name: "Docker Compose", icon: <FaDocker className="text-blue-300 text-4xl" /> },
  { name: "Git", icon: <FaGithub className="text-orange-500 text-4xl" /> },
  { name: "Linux", icon: <FaLinux className="text-gray-700 text-4xl" /> },
  { name: "English (C2)", icon: <FaLanguage className="text-green-600 text-4xl" /> },
  { name: "Portuguese (Native)", icon: <FaLanguage className="text-green-600 text-4xl" /> },
];


export default function Sobre() {

  return (
    <TabsContent value="sobre" className="mt-6">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gradient">About Me</h2>
        <p>
          Full-Stack Developer with solid experience in JavaScript, TypeScript, React.js, Node.js, and RESTful API integration. Specialized in building microservices, automating workflows, and developing scalable solutions using modern frameworks like Next.js, Remix, and Laravel.
        </p>

        <p>
          Passionate about innovation and tackling challenges, I have contributed to high-impact projects, such as inventory management systems and reservation platforms for the hospitality sector. I am always seeking opportunities to create technological solutions that deliver real value to businesses and users.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Skills</h2>
        <section>
          <div className="container mx-auto ">
            <Card className="mb-6  bg-transparent">
              <CardContent className="grid grid-cols-6 gap-3">
                {skills.map((item, index) => (
                  <div
                    key={item.name}
                    className={`flex flex-col items-center text-center transform transition-transform duration-200 hover:scale-110 ${(index % 6 === 5) ? 'col-start-1' : ''}`}
                  >
                    {item.icon}
                    <span className="mt-2 text-sm font-medium">{item.name}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Professional Experience</h2>
        <div className="space-y-6">
          {experiencias.map((experiencia, index) => (
            <div key={`experiencias-empresas-${experiencia.empresa}${index}`}>
              <h3 className="text-2xl font-semibold text-blue-400">{experiencia.cargo}</h3>
              <p className="text-gray-400">{experiencia.empresa}</p>
              <ul key={index}>
                {experiencia?.descricao.map((descricao, indexdesc) => (
                  <li key={`descricao-experiencia-${indexdesc}`}>
                    {descricao.texto}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Education</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Analysis and Software Development - Universidade de Franca</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Languages</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>English(C2)</li>
          <li>Portuguese(Native)</li>
        </ul>
      </section>
    </TabsContent>
  )
}

