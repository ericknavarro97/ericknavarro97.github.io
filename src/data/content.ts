import type { Localized } from "@/lib/i18n";

export const profile = {
  name: "Erick Navarro",
  handle: "ericknavarro97",
  role: {
    es: "Full-Stack Developer",
    en: "Full-Stack Developer",
  } as Localized<string>,
  location: {
    es: "Guadalajara, Jalisco",
    en: "Guadalajara, Jalisco, MX",
  } as Localized<string>,
  email: "erick_navarro@live.com.mx",
  github: "https://github.com/ericknavarro97",
  linkedin: "https://www.linkedin.com/in/ericknavarro97",
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
      value: "5+",
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
      "Soy desarrollador full-stack con base en Guadalajara, Jalisco. Llevo más de cinco años construyendo software para fintech, educación y healthtech — desde plataformas de verificación de identidad y scoring crediticio hasta apps móviles educativas y microservicios de audio.",
      "Mi día a día oscila entre React 19 con Tailwind v4 y shadcn/ui en el frontend, y Django + FastAPI en el backend. Me apasiona el detalle: el tipado correcto, los límites del sistema, las animaciones que se sienten bien.",
      "Cuando no estoy programando, estoy leyendo sobre arquitectura distribuida, optimización de bundles, o jugando con LLMs y agentes.",
    ],
    en: [
      "I'm a full-stack developer based in Guadalajara, Jalisco. For 5+ years I've been building software for fintech, education and healthtech — from identity-verification and credit-scoring platforms to educational mobile apps and audio microservices.",
      "Day to day I move between React 19 with Tailwind v4 and shadcn/ui on the frontend, and Django + FastAPI on the backend. I care about the details: correct typing, system boundaries, and animations that feel right.",
      "When I'm not coding I'm reading about distributed architecture, bundle optimization, or playing with LLMs and agents.",
    ],
  } as Localized<string[]>,
  facts: {
    es: [
      { k: "Base", v: "Guadalajara, Jalisco" },
      { k: "Rol", v: "Full-Stack Developer" },
      { k: "Foco", v: "Fintech · Identity · Education" },
      { k: "Idiomas", v: "Español · English" },
    ],
    en: [
      { k: "Based", v: "Guadalajara, Jalisco, MX" },
      { k: "Role", v: "Full-Stack Developer" },
      { k: "Focus", v: "Fintech · Identity · Education" },
      { k: "Languages", v: "Spanish · English" },
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
        name: "Datos & Infra",
        items: [
          "PostgreSQL",
          "Redis",
          "Drizzle ORM",
          "SQLAlchemy",
          "AWS S3 / CloudFront",
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
        name: "Data & Infra",
        items: [
          "PostgreSQL",
          "Redis",
          "Drizzle ORM",
          "SQLAlchemy",
          "AWS S3 / CloudFront",
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
        period: "2022 — Presente",
        bullets: [
          "Lidero el frontend de la suite SaaS de gestión inmobiliaria con React 19, Vite y Ant Design.",
          "Diseño e implemento APIs de verificación de identidad con Django, DRF y FastAPI.",
          "Refactoricé librerías compartidas de UI y migré stacks legacy a TypeScript estricto.",
        ],
      },
      {
        company: "Netica",
        role: "Software Engineer",
        period: "2024 — Presente",
        bullets: [
          "Construyo la app móvil educativa con Expo, React Native y NativeWind.",
          "Mantengo la web principal con React + Vite y un tema dark/light personalizado.",
          "Implementé motores de renderizado HTML con escalado responsivo y previews.",
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
    ],
    en: [
      {
        company: "Multiburo",
        role: "Full-Stack Developer",
        period: "2022 — Present",
        bullets: [
          "Lead the frontend of the property-management SaaS suite with React 19, Vite and Ant Design.",
          "Design and ship identity-verification APIs with Django, DRF and FastAPI.",
          "Refactored shared UI libraries and migrated legacy stacks to strict TypeScript.",
        ],
      },
      {
        company: "Netica",
        role: "Software Engineer",
        period: "2024 — Present",
        bullets: [
          "Build the educational mobile app with Expo, React Native, and NativeWind.",
          "Maintain the main web with React + Vite and a custom dark/light theme.",
          "Implemented HTML rendering engines with responsive scaling and previews.",
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
