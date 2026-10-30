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

type Dict = {
  nav: { about: string; focus: string; skills: string; contact: string };
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
  focus: {
    title: string;
    items: { title: string; text: string }[];
  };
  skills: {
    title: string;
    groups: { label: string; items: string[] }[];
  };
  facts: { label: string; value: string }[];
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
    focus: "What I do",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    role: "Senior Full-Stack Software Engineer",
    intro:
      "I build web applications end to end: React and TypeScript on the front, .NET and Node.js behind them. Five years in, mostly business software: workflows, integrations and the APIs that connect them.",
    emailCta: "Get in touch",
    resumeCta: "LinkedIn",
  },
  about: {
    title: "About",
    paragraphs: [
      "I work across the whole stack, but I care most about the part people touch: interfaces that stay fast, readable and easy to change.",
      "Day to day that means React, TypeScript and Tailwind on the frontend, REST APIs and OAuth/OIDC authentication in between, and .NET, Node.js or PHP behind them. SOLID and Clean Architecture keep the code maintainable as the product grows.",
      "I have also built serverless systems on AWS, ERP and billing integrations, and AI features on top of LLM services, working closely with product and engineering teams.",
    ],
  },
  focus: {
    title: "What I do",
    items: [
      {
        title: "Frontend engineering",
        text: "Reusable component systems, complex business workflows and fast, responsive interfaces with React, TypeScript, Next.js, Remix and Tailwind CSS.",
      },
      {
        title: "Backend & APIs",
        text: "Scalable services in .NET, Node.js and PHP using DDD, CQRS and Clean Architecture, with secure OAuth 2.0 / OIDC authentication and Redis caching.",
      },
      {
        title: "Cloud & integrations",
        text: "Serverless and containerized systems on AWS, ERP and financial integrations, and AI-powered workflows built on Generative AI and LLM services.",
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
  facts: [
    { label: "Experience", value: "5+ years" },
    { label: "Education", value: "Systems Analysis and Development, UNIFRAN" },
    { label: "Languages", value: "Portuguese (native) · English (advanced)" },
    {
      label: "Results",
      value:
        "40% less manual work via ERP integration · 30% faster collections · 20% lower infrastructure cost",
    },
    { label: "Worked with", value: "Automatiza · Dommus Tecnologia · Cerrado Code" },
  ],
  contact: {
    title: "Contact",
    subtitle:
      "Open to senior full-stack and frontend roles. The fastest way to reach me is email.",
    emailLabel: "Email",
    phoneLabel: "WhatsApp",
  },
  footer: "Built with Vite & Tailwind CSS.",
};
