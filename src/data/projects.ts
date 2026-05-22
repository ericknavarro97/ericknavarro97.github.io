import type { Localized } from "@/lib/i18n";

export type ProjectCategory =
  | "fintech"
  | "education"
  | "ecommerce"
  | "tools"
  | "healthcare"
  | "personal";

export type Project = {
  slug: string;
  name: Localized<string>;
  description: Localized<string>;
  tech: string[];
  category: ProjectCategory;
  /** Public-facing product URL (may require login). */
  liveUrl?: string;
  year: string;
  highlight: boolean;
};

export const projects: Project[] = [
  {
    slug: "property-saas-web",
    name: {
      es: "SaaS de Gestión Inmobiliaria",
      en: "Property Management SaaS",
    },
    description: {
      es: "Aplicación web principal de una plataforma SaaS para administración de propiedades, screening de inquilinos y contratos de renta.",
      en: "Main web app of a SaaS platform for property management, tenant screening, and rental contracts.",
    },
    tech: ["React 19", "TypeScript", "Vite 7", "Redux Toolkit", "React Query", "Ant Design"],
    category: "fintech",
    liveUrl: "https://dashboard.multiburo.com.mx/",
    year: "2024–2026",
    highlight: true,
  },
  {
    slug: "identity-platform-api",
    name: {
      es: "Plataforma de Verificación de Identidad",
      en: "Identity Verification Platform",
    },
    description: {
      es: "Backend monolítico Django/DRF de una plataforma fintech: scoring crediticio, contratos, pagos y comunicaciones omnicanal.",
      en: "Django/DRF backend monolith for a fintech platform: credit scoring, contracts, payments, and omnichannel comms.",
    },
    tech: ["Django 5", "DRF", "PostgreSQL", "Celery", "Redis", "Sentry"],
    category: "fintech",
    year: "2023–2026",
    highlight: true,
  },
  {
    slug: "digital-records-app",
    name: {
      es: "App de Expedientes Digitales",
      en: "Digital Records App",
    },
    description: {
      es: "Aplicación web para gestión de expedientes digitales con OCR, firma electrónica y modelos ONNX para validación de documentos.",
      en: "Web app for digital records with OCR, e-signature, and on-device ONNX models for document validation.",
    },
    tech: ["React 19", "TypeScript", "Vite", "Redux Toolkit", "ONNX Runtime", "PDF.js"],
    category: "fintech",
    year: "2024–2026",
    highlight: true,
  },
  {
    slug: "identity-mobile-app",
    name: {
      es: "App Móvil Educativa",
      en: "Educational Mobile App",
    },
    description: {
      es: "App móvil cross-platform para gestión de práctica educativa: visor de lecciones, activación de licencias y seguimiento de progreso.",
      en: "Cross-platform mobile app for educational practice: lesson viewer, license activation, and progress tracking.",
    },
    tech: ["Expo 55", "React Native", "TypeScript", "React Query", "Zustand", "NativeWind"],
    category: "education",
    liveUrl: "https://platform.neticaweb.com/",
    year: "2025–2026",
    highlight: true,
  },
  {
    slug: "lightmind-audio",
    name: {
      es: "Microservicio de Audio Lightmind",
      en: "Lightmind Audio Microservice",
    },
    description: {
      es: "Microservicio de audio para una app de meditación con streaming, almacenamiento en S3/CloudFront y metadata asistida por IA.",
      en: "Audio microservice powering a meditation app with S3/CloudFront streaming and AI-assisted metadata.",
    },
    tech: ["Bun", "Elysia", "TypeScript", "Drizzle ORM", "PostgreSQL", "AWS S3"],
    category: "healthcare",
    year: "2025",
    highlight: true,
  },
  {
    slug: "contract-editor",
    name: {
      es: "Editor de Contratos (Librería React)",
      en: "Contract Editor (React Library)",
    },
    description: {
      es: "Librería de componentes React 19 para construir y editar contratos digitales con drag-and-drop y editor de texto enriquecido.",
      en: "React 19 component library to build and edit digital contracts with drag-and-drop and rich text editing.",
    },
    tech: ["React 19", "TypeScript", "TipTap", "dnd-kit", "Zustand", "Vite"],
    category: "tools",
    year: "2026",
    highlight: true,
  },
  {
    slug: "dr-lino-web",
    name: {
      es: "Sitio Web Dr. Lino",
      en: "Dr. Lino Website",
    },
    description: {
      es: "Sitio profesional bilingüe para un médico, construido con Next.js 16 e internacionalización.",
      en: "Bilingual professional website for a medical doctor, built with Next.js 16 and i18n.",
    },
    tech: ["Next.js 16", "React 19", "Tailwind CSS 4", "next-intl", "TypeScript"],
    category: "healthcare",
    liveUrl: "https://drlinogarcia.com",
    year: "2026",
    highlight: true,
  },
  {
    slug: "document-verification-api",
    name: {
      es: "API de Verificación Documental",
      en: "Document Verification API",
    },
    description: {
      es: "API FastAPI para verificación de documentos oficiales mexicanos (INE, pasaporte, comprobantes) con OCR e integraciones externas.",
      en: "FastAPI service for verifying official Mexican IDs (INE, passport, utility bills) via OCR and third-party providers.",
    },
    tech: ["FastAPI", "Python 3.13", "SQLAlchemy", "Alembic", "Pydantic", "PostgreSQL"],
    category: "fintech",
    year: "2025–2026",
    highlight: false,
  },
  {
    slug: "blog-platform",
    name: {
      es: "Blog y Sitio Corporativo",
      en: "Corporate Blog & Marketing Site",
    },
    description: {
      es: "Sitio corporativo y blog con Astro 5, internacionalización con Paraglide y CMS headless.",
      en: "Corporate marketing site and blog built with Astro 5, Paraglide i18n, and a headless CMS.",
    },
    tech: ["Astro 5", "React 19", "Tailwind CSS 4", "Paraglide i18n", "CosmicJS"],
    category: "tools",
    year: "2026",
    highlight: false,
  },
  {
    slug: "pos-system",
    name: {
      es: "Sistema POS",
      en: "POS System",
    },
    description: {
      es: "Sistema de punto de venta: monorepo con backend Django/DRF/Celery y frontend Vite + React con integración Stripe.",
      en: "Point-of-sale monorepo: Django/DRF/Celery backend with a Vite + React frontend and Stripe integration.",
    },
    tech: ["Django 5", "DRF", "Celery", "React 18", "TypeScript", "Stripe"],
    category: "ecommerce",
    year: "2024–2025",
    highlight: false,
  },
];
