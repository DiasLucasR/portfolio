import { TabsContent } from "@/components/ui/tabs"

const arrayHabilidades = ["JavaScript", "TypeScript", "PHP", 'Node.js', "React.js",
  "Next.js", "Remix.Js", , "React Native", "AngularJS", "Laravel", "SQL",
  "MySQL", "PostgreSQL", "Docker", "Git", "Linux"];

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
  }
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
        <div className="">
          <div>

          </div>
          <span className="grid grid-cols-2 sm::grid-cols-2 md:grid-cols-4 gap-4">
            {arrayHabilidades.map((skill) => (
              <div key={skill} className="bg-gray-800 p-3 rounded-lg text-center hover-lift">
                {skill}
              </div>
            ))}
          </span>
        </div>

      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Experiência Profissional</h2>
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

