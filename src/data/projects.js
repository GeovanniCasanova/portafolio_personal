// src/data/projects.js

import codheyImage from "@/assets/images/codhey_web.png";
import oaxacaMielImage from "@/assets/images/oaxaca_miel_web.png";
import midHomesImage from "@/assets/images/yucatan_mid_homes.png";
import mvpImage from "@/assets/images/mvp-inventario.png";
import syswareImage from "@/assets/images/sysware_digital.png";
import iphoneCatalogImage from "@/assets/images/landing_page_mobilmx.png";

// NUEVAS INVITACIONES DIGITALES
import minecraftInviteImage from "@/assets/images/invitacion_minecraft.png";
import bodaOroImage from "@/assets/images/boda_oro_1.png";
import jeydenInviteImage from "@/assets/images/invitacion_jey_1.png";

export const projects = [
  {
    title: "Sysware Digital",
    description: "Sistema de gestión digital para negocios que facilita la digitalización de operaciones, incluyendo menús digitales y gestión de pagos. Enfocado en pequeños y medianos negocios.",
    image: syswareImage,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "Prisma"],
    link: "https://sysware-digital.vercel.app",
    features: [
      "Gestión multi-negocio con roles y permisos",
      "Menús digitales personalizables con códigos QR",
      "Sistema seguro de información bancaria",
      "Panel administrativo con tema claro/oscuro",
      "API RESTful con TypeScript y Prisma"
    ],
    techFeatures: [
      "Arquitectura modular con Next.js 13 App Router",
      "Sistema de autenticación con NextAuth.js",
      "Optimización de rendimiento con SWR",
      "Validación de datos con Zod",
      "Rate limiting y medidas de seguridad"
    ]
  },
  {
    title: "iMobilMX",
    description: "Catálogo e-commerce especializado en iPhones premium, construido con Astro y React. Enfocado en rendimiento SEO excepcional, tasas de conversión optimizadas mediante integración de WhatsApp y una experiencia de usuario premium.",
    image: iphoneCatalogImage,
    tags: ["Astro", "React", "TypeScript", "Tailwind CSS", "SEO"],
    link: "https://mobilmx.vercel.app/",
    features: [
      "Server-side rendering (SSR) para SEO óptimo",
      "Integración con WhatsApp para conversión directa",
      "Catálogo dinámico con especificaciones detalladas",
      "Diseño responsive enfocado en móviles",
      "Implementación de Schema.org para datos estructurados",
      "Optimización de imágenes y lazy loading",
      "Assets y componentes optimizados para rendimiento"
    ],
    techFeatures: [
      "Prácticas SEO avanzadas con meta tags dinámicos",
      "TypeScript para mejor seguridad de tipos",
      "Hidratación parcial de Astro para rendimiento óptimo",
      "Arquitectura basada en componentes React",
      "Sistema de diseño consistente con Tailwind CSS",
    ]
  },
  {
    title: "Invitación Digital Minecraft",
    description: "Invitación de cumpleaños temática de Minecraft con experiencia inmersiva. Sistema de audio romántico, bloques flotantes animados, timeline interactiva de 6 años de historia y efectos de partículas estilo experiencia de Minecraft.",
    image: minecraftInviteImage,
    tags: ["Astro", "React", "Framer Motion", "Tailwind CSS"],
    link: "https://minecraft-birthday.vercel.app/",
    features: [
      "Sistema de audio con 'Otras Vidas' de Carlos Rivera",
      "Bloques flotantes de Minecraft con física realista",
      "Timeline interactiva 2019-2024 con paleta única por año",
      "Sistema de partículas verdes estilo experiencia XP",
      "Modal de cumpleaños épico con efectos de brillo",
      "Diseño responsive optimizado para WhatsApp móvil",
      "Toggle de partículas para ahorro de batería"
    ],
    techFeatures: [
      "React 19 + Vite para rendimiento ultrarrápido",
      "Framer Motion para animaciones profesionales 60fps",
      "Tailwind CSS v4 con colores Minecraft personalizados",
      "Autoplay inteligente con prompt UX-friendly",
      "Transiciones 3D (rotateY) en cambio de secciones",
      "Detección de pantalla en tiempo real para optimización"
    ]
  },
  {
    title: "Invitación Boda de Oro",
    description: "Invitación digital elegante para aniversario de bodas de oro. Diseño sofisticado con galería de fotos, responsive design y experiencia premium para celebración de 50 años.",
    image: bodaOroImage,
    tags: ["Astro", "Tailwind CSS", "JavaScript"],
    link: "https://invitacion.micard.me/",
    features: [
      "Diseño elegante con paleta dorada premium",
      "Galería de fotos interactiva con slider",
      "Sistema de RSVP integrado",
      "Información de evento con countdown timer",
      "Diseño responsive optimizado para móviles",
      "Carga rápida < 2 segundos",
      "Optimización SEO para compartir en redes"
    ],
    techFeatures: [
      "Astro para SSR y performance óptimo",
      "Tailwind CSS con tema personalizado dorado",
      "Lazy loading de imágenes optimizado",
      "Meta tags optimizados para WhatsApp/Facebook",
      "Lighthouse score >95 en todas las métricas"
    ]
  },
  {
    title: "Invitación Mexicana - Jeyden",
    description: "Invitación digital vibrante con temática mexicana. Diseño colorido con papel picado, confetti, galería de 14 imágenes, reproductor de música mariachi y confirmación por WhatsApp.",
    image: jeydenInviteImage,
    tags: ["Astro", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://invitacion-jeyden.vercel.app/",
    features: [
      "Paleta mexicana vibrante (verde bandera, rojo, amarillo)",
      "Animaciones de papel picado y confetti CSS",
      "Reproductor de música 'El Mariachi Loco' interactivo",
      "Galería slider de 14 imágenes con auto-play",
      "Google Maps embebido con dress code",
      "Botón WhatsApp con mensaje predefinido y tracking",
      "Pirotecnia CSS con controles de activación/pausa"
    ],
    techFeatures: [
      "Astro 5.x + React 18 + TypeScript stack moderno",
      "Framer Motion para animaciones fluidas",
      "Mobile-first con carga < 3s en 3G",
      "Lighthouse Score >90 en todas las categorías",
      "LCP < 2.5s, FID < 100ms, CLS < 0.1",
      "WCAG 2.1 AA totalmente accesible"
    ]
  },
  {
    title: "CODHEY",
    description: "Portal oficial de la Comisión de Derechos Humanos del Estado de Yucatán. Plataforma web completa que incluye sistema de gestión de contenidos, portal de transparencia y herramientas de accesibilidad para personas con discapacidad.",
    image: codheyImage,
    tags: ["Angular", "Node.js", "MySQL"],
    link: "https://codhey.org/",
    features: [
      "Sistema de gestión de contenidos personalizado",
      "Portal de transparencia integrado",
      "Herramientas de accesibilidad web",
      "Optimización SEO",
    ],
  },
  {
    title: "Oaxaca Miel",
    description: "E-commerce especializado en la venta de productos apícolas artesanales de Oaxaca. Incluye sistema de carrito de compras, gestión de inventario y procesamiento de pagos seguros.",
    image: oaxacaMielImage,
    tags: ["Angular", "Node.js", "MySQL"],
    link: "https://oaxacamiel.com/",
    features: [
      "Carrito de compras integrado",
      "Sistema de pagos con Stripe",
      "Gestión de inventario en tiempo real",
      "Diseño responsivo optimizado",
    ],
  },
  {
    title: "Yucatan Mid Homes",
    description: "Portal inmobiliario con sistema avanzado de búsqueda y filtrado de propiedades. Incluye visualización de propiedades en mapa, galería de imágenes y sistema de contacto integrado.",
    image: midHomesImage,
    tags: ["Angular", "Google Maps API", "Wordpress"],
    link: "https://yucatanmidhomes.com/",
    features: [
      "Sistema de búsqueda avanzado",
      "Integración con Google Maps",
      "Galería de imágenes interactiva",
      "Sistema de leads automatizado",
    ],
  },
  {
    title: "MVP Inventario",
    description: "Sistema de gestión de inventario moderno y adaptable con funcionalidades avanzadas para control de productos, clientes y proveedores. Incluye dashboard interactivo, gestión de stock, reportes detallados y sistema de notificaciones.",
    image: mvpImage,
    tags: ["Angular", "Tailwind CSS", "Node.js", "MySQL"],
    link: "https://mvp-inventario-frontend.vercel.app",
    features: [
      "Dashboard con métricas clave y alertas",
      "Gestión completa de productos y categorías",
      "Control de movimientos de inventario",
      "Administración de clientes y proveedores",
      "Sistema de alertas de stock bajo",
      "Reportes exportables y análisis",
      "Interfaz adaptativa con modo oscuro",
      "Validaciones en tiempo real"
    ],
    techFeatures: [
      "Arquitectura modular y escalable",
      "Componentes reutilizables",
      "Integración con API RESTful",
      "Diseño responsivo con Tailwind CSS",
      "Manejo de estados y formularios reactivos",
      "Sistema de notificaciones dinámicas",
      "Lazy loading para optimización"
    ]
  }
];