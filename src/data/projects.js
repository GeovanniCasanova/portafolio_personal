
import codheyImage from "@/assets/images/codhey_web.png";
import oaxacaMielImage from "@/assets/images/oaxaca_miel_web.png";
import midHomesImage from "@/assets/images/yucatan_mid_homes.png";
import mvpImage from "@/assets/images/mvp-inventario.png";

export const projects = [
    {
      title: "CODHEY",
      description:
        "Portal oficial de la Comisión de Derechos Humanos del Estado de Yucatán. Plataforma web completa que incluye sistema de gestión de contenidos, portal de transparencia y herramientas de accesibilidad para personas con discapacidad.",
      image: codheyImage,
      tags: ["Angular", "Node.js", "Mysql"],
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
      description:
        "E-commerce especializado en la venta de productos apícolas artesanales de Oaxaca. Incluye sistema de carrito de compras, gestión de inventario y procesamiento de pagos seguros.",
      image: oaxacaMielImage,
      tags: ["Angular", "Node.js", "Express", "Mysql"],
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
      description:
        "Portal inmobiliario con sistema avanzado de búsqueda y filtrado de propiedades. Incluye visualización de propiedades en mapa, galería de imágenes y sistema de contacto integrado.",
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
  tags: ["Angular", "Tailwind CSS", "Node.js", "Mysql"],
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