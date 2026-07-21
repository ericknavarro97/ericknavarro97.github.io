import type { Localized } from "@/lib/i18n";

export const profile = {
  name: "Erick Navarro",
  handle: "ericknavarro97",
  role: {
    es: "Full-Stack Developer",
    en: "Full-Stack Developer",
  } as Localized<string>,
  location: {
    es: "Zapopan, Jalisco",
    en: "Zapopan, Jalisco, MX",
  } as Localized<string>,
  email: "erick_navarro@live.com.mx",
  github: "https://github.com/ericknavarro97",
  linkedin: "https://www.linkedin.com/in/erick-navarro",
};

export const nav: Localized<{ label: string; href: string }[]> = {
  es: [
    { label: "Inicio", href: "#home" },
    { label: "Sobre mí", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Proyectos", href: "#projects" },
    { label: "Trayectoria", href: "#experience" },
    { label: "Contacto", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

export const hero = {
  status: {
    es: "Disponible para colaborar",
    en: "Available for collaboration",
  } as Localized<string>,
  greeting: {
    es: "Hola, soy",
    en: "Hello, I'm",
  } as Localized<string>,
  tagline: {
    es: "Construyo plataformas fintech, educativas y de verificación de identidad de extremo a extremo.",
    en: "I build fintech, education, and identity-verification platforms end to end.",
  } as Localized<string>,
  intro: {
    es: "Diseño interfaces precisas con React y TypeScript, y servicios robustos con Python y Node. Convierto requerimientos difusos en sistemas que escalan.",
    en: "I design precise interfaces with React and TypeScript, and ship robust services with Python and Node. I turn fuzzy requirements into systems that scale.",
  } as Localized<string>,
  primaryCta: {
    es: "Ver proyectos",
    en: "See projects",
  } as Localized<string>,
  secondaryCta: {
    es: "Escríbeme",
    en: "Get in touch",
  } as Localized<string>,
  stats: [
    {
      value: "6+",
      label: { es: "años construyendo", en: "years shipping" } as Localized<string>,
    },
    {
      value: "20+",
      label: { es: "proyectos en producción", en: "projects in production" } as Localized<string>,
    },
    {
      value: "10+",
      label: { es: "stacks dominados", en: "stacks mastered" } as Localized<string>,
    },
  ],
};

export const about = {
  title: { es: "Sobre mí", en: "About" } as Localized<string>,
  eyebrow: { es: "// quién soy", en: "// who I am" } as Localized<string>,
  paragraphs: {
    es: [
      "Soy desarrollador full-stack con base en Zapopan, Jalisco. Ingeniero en Comunicaciones y Electrónica de formación, llevo más de seis años construyendo software para fintech, educación y healthtech — desde plataformas de verificación de identidad y scoring crediticio hasta apps móviles educativas y microservicios de audio.",
      "Mi día a día oscila entre React 19 con Tailwind v4 y shadcn/ui en el frontend, y Django + FastAPI + Node en el backend, liderando equipos que llevan proyectos de la idea al despliegue en AWS y GCP. También manejo Java, Kotlin, C# y C++ cuando el proyecto lo pide.",
      "Cuando no estoy programando, estoy leyendo sobre arquitectura distribuida, optimización de bundles, o jugando con LLMs y agentes.",
    ],
    en: [
      "I'm a full-stack developer based in Zapopan, Jalisco. Trained as a Communication & Electronic Engineer, I've spent 6+ years building software for fintech, education and healthtech — from identity-verification and credit-scoring platforms to educational mobile apps and audio microservices.",
      "Day to day I move between React 19 with Tailwind v4 and shadcn/ui on the frontend, and Django + FastAPI + Node on the backend, leading teams that ship projects from idea to deploy on AWS and GCP. I also work in Java, Kotlin, C# and C++ when the project calls for it.",
      "When I'm not coding I'm reading about distributed architecture, bundle optimization, or playing with LLMs and agents.",
    ],
  } as Localized<string[]>,
  facts: {
    es: [
      { k: "Base", v: "Zapopan, Jalisco" },
      { k: "Rol", v: "Full-Stack Developer" },
      { k: "Foco", v: "Fintech · Identity · Education" },
      { k: "Idiomas", v: "Español (nativo) · English (profesional)" },
    ],
    en: [
      { k: "Based", v: "Zapopan, Jalisco, MX" },
      { k: "Role", v: "Full-Stack Developer" },
      { k: "Focus", v: "Fintech · Identity · Education" },
      { k: "Languages", v: "Spanish (native) · English (professional)" },
    ],
  } as Localized<{ k: string; v: string }[]>,
};

export const stack = {
  title: { es: "Stack", en: "Stack" } as Localized<string>,
  eyebrow: { es: "// con lo que construyo", en: "// what I build with" } as Localized<string>,
  groups: {
    es: [
      {
        name: "Frontend",
        items: [
          "React 19",
          "TypeScript",
          "Vite 7",
          "Next.js",
          "Astro",
          "Tailwind CSS v4",
          "shadcn/ui",
          "Ant Design",
          "Zustand",
          "Redux Toolkit",
          "TanStack Query",
        ],
      },
      {
        name: "Mobile",
        items: ["React Native", "Expo", "NativeWind"],
      },
      {
        name: "Backend",
        items: [
          "Python",
          "Django",
          "DRF",
          "FastAPI",
          "Celery",
          "Node.js",
          "Bun",
          "Elysia",
        ],
      },
      {
        name: "Datos",
        items: [
          "PostgreSQL",
          "MySQL",
          "Redis",
          "DynamoDB",
          "Drizzle ORM",
          "SQLAlchemy",
        ],
      },
      {
        name: "Cloud & DevOps",
        items: [
          "AWS (EC2, RDS, S3, Elastic Beanstalk, DynamoDB)",
          "Google Cloud (Cloud Run, Cloud SQL, Compute Engine, Storage)",
          "Docker",
          "GitHub Actions",
          "Sentry",
        ],
      },
    ],
    en: [
      {
        name: "Frontend",
        items: [
          "React 19",
          "TypeScript",
          "Vite 7",
          "Next.js",
          "Astro",
          "Tailwind CSS v4",
          "shadcn/ui",
          "Ant Design",
          "Zustand",
          "Redux Toolkit",
          "TanStack Query",
        ],
      },
      {
        name: "Mobile",
        items: ["React Native", "Expo", "NativeWind"],
      },
      {
        name: "Backend",
        items: [
          "Python",
          "Django",
          "DRF",
          "FastAPI",
          "Celery",
          "Node.js",
          "Bun",
          "Elysia",
        ],
      },
      {
        name: "Data",
        items: [
          "PostgreSQL",
          "MySQL",
          "Redis",
          "DynamoDB",
          "Drizzle ORM",
          "SQLAlchemy",
        ],
      },
      {
        name: "Cloud & DevOps",
        items: [
          "AWS (EC2, RDS, S3, Elastic Beanstalk, DynamoDB)",
          "Google Cloud (Cloud Run, Cloud SQL, Compute Engine, Storage)",
          "Docker",
          "GitHub Actions",
          "Sentry",
        ],
      },
    ],
  } as Localized<{ name: string; items: string[] }[]>,
};

export const projectsSection = {
  title: { es: "Proyectos seleccionados", en: "Selected projects" } as Localized<string>,
  eyebrow: { es: "// trabajo reciente", en: "// recent work" } as Localized<string>,
  filterAll: { es: "Todos", en: "All" } as Localized<string>,
  showMore: { es: "Ver todos los proyectos", en: "See all projects" } as Localized<string>,
  showLess: { es: "Ver menos", en: "Show less" } as Localized<string>,
  private: { es: "Producto en producción", en: "Live product" } as Localized<string>,
  categoryLabels: {
    es: {
      fintech: "Fintech",
      education: "Educación",
      ecommerce: "E-commerce",
      tools: "Herramientas",
      healthcare: "Salud",
      personal: "Personal",
    },
    en: {
      fintech: "Fintech",
      education: "Education",
      ecommerce: "E-commerce",
      tools: "Tooling",
      healthcare: "Healthcare",
      personal: "Personal",
    },
  } as Localized<Record<string, string>>,
};

export const experience = {
  title: { es: "Trayectoria", en: "Experience" } as Localized<string>,
  eyebrow: { es: "// dónde he estado", en: "// where I've been" } as Localized<string>,
  items: {
    es: [
      {
        company: "Multiburo",
        role: "Full-Stack Developer",
        period: "Mar 2022 — Presente",
        bullets: [
          "Lidero el desarrollo de APIs REST con Python (Django, FastAPI) y Node.js, gestionando un equipo para llevar soluciones de la idea al despliegue.",
          "Frontend de la suite SaaS de gestión inmobiliaria con React 19, Vite, Redux Toolkit y Ant Design; librerías de UI compartidas migradas a TypeScript estricto.",
          "Uso intensivo de AWS (Elastic Beanstalk, EC2, RDS, DynamoDB) y Google Cloud (Compute Engine, Cloud SQL, Cloud Run, Storage), con Docker para consistencia entre entornos.",
        ],
      },
      {
        company: "Netica",
        role: "Software Engineer",
        period: "Jul 2021 — Presente",
        bullets: [
          "Desarrollo y mantengo la plataforma educativa con Python y Django: nuevas funcionalidades, optimización de performance y confiabilidad.",
          "Despliegue y operación en AWS (Elastic Beanstalk, RDS, S3) con foco en almacenamiento seguro y escalable.",
          "Construyo la app móvil educativa con Expo, React Native y NativeWind, y motores de renderizado HTML con escalado adaptable y vistas previas.",
        ],
      },
      {
        company: "Proyectos independientes",
        role: "Consultor / Builder",
        period: "2023 — Presente",
        bullets: [
          "Microservicios de audio para una app de meditación (Bun + Elysia + AWS).",
          "Sitios profesionales bilingües con Next.js 16, Tailwind v4 e i18n.",
          "Editores visuales de contratos con TipTap y dnd-kit.",
        ],
      },
      {
        company: "Onnet",
        role: "Data Science Engineer (part-time)",
        period: "Jun 2020 — Ago 2021",
        bullets: [
          "Procesamiento y gestión de datos con MySQL, PostgreSQL y NoSQL; scripts en Python para automatización de cargas a servidores.",
          "Aplicación de lógica de negocio sobre bases de datos y archivos con librerías estándar de Python.",
        ],
      },
      {
        company: "FITECH University",
        role: "Programming Teacher",
        period: "Sep 2019 — Jul 2021",
        bullets: [
          "Impartí Fundamentos de Programación, Programación Estructurada, Bases de Datos y Programación por Eventos los sábados.",
          "Lenguajes cubiertos: C++, Python, Java, MySQL y C#.",
        ],
      },
    ],
    en: [
      {
        company: "Multiburo",
        role: "Full-Stack Developer",
        period: "Mar 2022 — Present",
        bullets: [
          "Lead REST API development with Python (Django, FastAPI) and Node.js, managing a team that ships solutions from idea to deploy.",
          "Frontend of the property-management SaaS suite with React 19, Vite, Redux Toolkit and Ant Design; shared UI libraries migrated to strict TypeScript.",
          "Heavy use of AWS (Elastic Beanstalk, EC2, RDS, DynamoDB) and Google Cloud (Compute Engine, Cloud SQL, Cloud Run, Storage), with Docker for cross-environment consistency.",
        ],
      },
      {
        company: "Netica",
        role: "Software Engineer",
        period: "Jul 2021 — Present",
        bullets: [
          "Build and maintain the educational platform with Python and Django: new features, performance optimization, and reliability.",
          "Deploy and operate on AWS (Elastic Beanstalk, RDS, S3) with a focus on secure and scalable file storage.",
          "Build the educational mobile app with Expo, React Native and NativeWind, plus HTML rendering engines with responsive scaling and previews.",
        ],
      },
      {
        company: "Independent projects",
        role: "Consultant / Builder",
        period: "2023 — Present",
        bullets: [
          "Audio microservices for a meditation app (Bun + Elysia + AWS).",
          "Bilingual professional websites with Next.js 16, Tailwind v4 and i18n.",
          "Visual contract editors with TipTap and dnd-kit.",
        ],
      },
      {
        company: "Onnet",
        role: "Data Science Engineer (part-time)",
        period: "Jun 2020 — Aug 2021",
        bullets: [
          "Data processing and management with MySQL, PostgreSQL and NoSQL; Python scripts to automate server-side uploads.",
          "Business logic applied to databases and files using standard Python libraries.",
        ],
      },
      {
        company: "FITECH University",
        role: "Programming Teacher",
        period: "Sep 2019 — Jul 2021",
        bullets: [
          "Taught Programming Fundamentals, Structured Programming, Database Fundamentals and Event Programming on Saturdays.",
          "Languages covered: C++, Python, Java, MySQL and C#.",
        ],
      },
    ],
  } as Localized<{ company: string; role: string; period: string; bullets: string[] }[]>,
};

export const contact = {
  title: { es: "Hablemos", en: "Let's talk" } as Localized<string>,
  eyebrow: { es: "// contacto", en: "// contact" } as Localized<string>,
  copy: {
    es: "¿Tienes un proyecto en mente o una vacante interesante? Mándame un mensaje — respondo en menos de 24 horas.",
    en: "Got a project in mind or an interesting role? Drop me a line — I reply within 24 hours.",
  } as Localized<string>,
  emailCta: { es: "Enviar correo", en: "Send email" } as Localized<string>,
  copied: { es: "¡Copiado!", en: "Copied!" } as Localized<string>,
  copy_email: { es: "Copiar correo", en: "Copy email" } as Localized<string>,
};

export const footer = {
  rights: {
    es: "Hecho con React, Tailwind y demasiado café.",
    en: "Built with React, Tailwind, and too much coffee.",
  } as Localized<string>,
};
