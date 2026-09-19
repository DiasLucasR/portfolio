export const CONTACT = {
  name: "Lucas Dias",
  email: "lucasroliveiradias@gmail.com",
  phone: "+55 (38) 99120-6281",
  phoneHref: `https://wa.me/5538991206281?text=${encodeURIComponent(
    "Hi! I found your portfolio and I'm interested in getting in touch.",
  )}`,
  linkedin: "https://linkedin.com/in/lucasrdias",
  github: "https://github.com/DiasLucasR",
};

export const SOCIALS = [
  { href: CONTACT.linkedin, icon: "linkedin", label: "LinkedIn" },
  { href: CONTACT.github, icon: "github", label: "GitHub" },
  { href: CONTACT.phoneHref, icon: "whatsapp", label: "WhatsApp" },
] as const;

type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

type Dict = {
  nav: { about: string; experience: string; skills: string; contact: string };
  hero: {
    role: string;
    intro: string;
    emailCta: string;
    resumeCta: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  experience: {
    title: string;
    items: Experience[];
  };
  skills: {
    title: string;
    groups: { label: string; items: string[] }[];
  };
  education: {
    title: string;
    degreeLabel: string;
    degree: string;
    school: string;
    languagesTitle: string;
    languages: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
  };
  footer: string;
};

const skillGroups = (labels: [string, string, string, string, string]) => [
  {
    label: labels[0],
    items: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Next.js",
      "Remix",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "SWR",
      "Vitest",
    ],
  },
  { label: labels[1], items: ["OAuth 2.0", "OpenID Connect (OIDC)", "JWT"] },
  {
    label: labels[2],
    items: [
      ".NET (C#)",
      "Node.js",
      "NestJS",
      "PHP",
      "Laravel",
      "Laravel Lumen",
      "REST APIs",
      "Microservices",
      "DDD",
      "CQRS",
      "Clean Architecture",
      "SOLID",
      "Redis",
    ],
  },
  {
    label: labels[3],
    items: ["AWS", "Docker", "Linux", "Git", "CI/CD", "Jenkins"],
  },
  {
    label: labels[4],
    items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
  },
];

export const dictionary: Dict = {
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    role: "Senior Full-Stack Software Engineer",
    intro:
      "5+ years designing and building modern, scalable web applications with deep expertise in React, TypeScript and frontend architecture — backed by solid backend engineering with .NET, Node.js and distributed systems.",
    emailCta: "Get in touch",
    resumeCta: "LinkedIn",
  },
  about: {
    title: "About",
    paragraphs: [
      "I build reusable UI components, complex business workflows, responsive interfaces and data-driven applications using React, Vite, Next.js, Remix, Tailwind CSS and TanStack Query, following modern engineering best practices.",
      "I have a strong background integrating frontend applications with REST APIs, implementing secure authentication with OAuth/OIDC, improving performance, and delivering maintainable software guided by SOLID, Clean Architecture and Agile methodologies.",
      "My complementary backend expertise with .NET, Node.js, PHP and AWS lets me design end-to-end solutions and collaborate closely across cross-functional engineering teams.",
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Full-Stack Developer",
        company: "Automatiza",
        period: "Apr 2025 — Present",
        bullets: [
          "Develop full-stack enterprise applications with React, TypeScript, Vite and Tailwind CSS, plus scalable backend services in .NET (C#) using DDD, CQRS and Clean Architecture.",
          "Design RESTful APIs, service integrations and backend workflows, with Redis for high-performance data access and caching.",
          "Build secure authentication and authorization flows using OAuth 2.0 and OpenID Connect (OIDC).",
          "Design and integrate AI-powered solutions using Generative AI services and LLM workflows.",
          "Automated critical business workflows and system integrations, reducing manual operational effort by 20%.",
        ],
      },
      {
        role: "Full-Stack Developer",
        company: "Dommus Tecnologia",
        period: "Nov 2022 — Apr 2025",
        bullets: [
          "Developed enterprise web applications using React, TypeScript, Next.js and Remix, with reusable components and responsive interfaces.",
          "Integrated frontend applications with REST and XML APIs using SWR for efficient server-state management.",
          "Designed and maintained microservices with Laravel Lumen, Docker and Node.js, plus event-driven asynchronous integrations.",
          "Led ERP integration initiatives through REST APIs, reducing manual processes by 40%.",
          "Implemented financial-system integrations and automated billing workflows, accelerating collection operations by 30%.",
        ],
      },
      {
        role: "Full-Stack Developer",
        company: "Cerrado Code",
        period: "Jul 2021 — Nov 2022",
        bullets: [
          "Developed modern web applications using React, TypeScript and Next.js with responsive interfaces.",
          "Built scalable serverless applications using AWS Lambda, API Gateway and DynamoDB, reducing infrastructure costs by 20%.",
          "Built and deployed cloud-native solutions using the AWS Serverless Framework.",
          "Integrated third-party REST APIs and external services to support business growth.",
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: skillGroups([
      "Frontend",
      "Authentication",
      "Backend",
      "Cloud & DevOps",
      "Databases",
    ]),
  },
  education: {
    title: "Education",
    degreeLabel: "Degree",
    degree: "Systems Analysis and Development",
    school: "University of Franca (UNIFRAN)",
    languagesTitle: "Languages",
    languages: [
      "Portuguese — Native",
      "English — Advanced / Professional Working Proficiency",
    ],
  },
  contact: {
    title: "Let's work together",
    subtitle:
      "Open to senior full-stack and frontend roles. The fastest way to reach me is email.",
    emailLabel: "Email",
    phoneLabel: "WhatsApp",
  },
  footer: "Built with Vite & Tailwind CSS.",
};
