// src/components/layout/Head.jsx
import { useEffect } from "react";

const Head = () => {
  useEffect(() => {
    // URL base del sitio
    const siteUrl = "https://geovannicasanova.github.io/portafolio_personal";

    // Imagen por defecto para compartir (asegúrate de que esta imagen exista en tu proyecto)
    const defaultImage = `${siteUrl}/preview.svg`;
    // Configuración de meta tags
    const metaTags = [
      // Meta tags básicos
      {
        name: "title",
        content: "Geovanni Casanova | Desarrollador Full Stack",
      },
      {
        name: "description",
        content:
          "Desarrollador Full Stack especializado en React, Angular y tecnologías modernas. Experiencia en desarrollo web, aplicaciones móviles y soluciones empresariales.",
      },
      // Open Graph / Facebook
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: siteUrl,
      },
      {
        property: "og:title",
        content: "Geovanni Casanova | Desarrollador Full Stack",
      },
      {
        property: "og:description",
        content:
          "Portafolio profesional mostrando proyectos innovadores en desarrollo web y móvil. Especializado en React, Angular y tecnologías modernas.",
      },
      {
        property: "og:image",
        content: defaultImage,
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      // Twitter
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:url",
        content: siteUrl,
      },
      {
        name: "twitter:title",
        content: "Geovanni Casanova | Full Stack Developer",
      },
      {
        name: "twitter:description",
        content:
          "Desarrollador Full Stack con experiencia en React, Angular y desarrollo web moderno. Descubre mis proyectos y habilidades.",
      },
      {
        name: "twitter:image",
        content: defaultImage,
      },
      // Meta tags adicionales
      {
        name: "theme-color",
        content: "#000000",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "language",
        content: "Spanish",
      },
      {
        name: "author",
        content: "Geovanni Casanova",
      },
      {
        name: "keywords",
        content:
          "desarrollo web, frontend, backend, react, angular, full stack, méxico, yucatán, mérida",
      },
    ];

    // Limpiar meta tags existentes
    document.querySelectorAll("meta").forEach((tag) => {
      if (tag.name !== "viewport" && tag.charset !== "UTF-8") {
        tag.remove();
      }
    });

    // Agregar nuevos meta tags
    metaTags.forEach((tag) => {
      const meta = document.createElement("meta");
      Object.keys(tag).forEach((key) => {
        meta[key] = tag[key];
      });
      document.head.appendChild(meta);
    });

    // Actualizar el título
    document.title = "Geovanni Casanova | Desarrollador Full Stack";

    // Agregar favicon
    const faviconLink = document.createElement("link");
    faviconLink.rel = "icon";
    faviconLink.type = "image/svg+xml";
    faviconLink.href = "/favicon.svg";
    document.head.appendChild(faviconLink);
  }, []);

  return null;
};

export default Head;
