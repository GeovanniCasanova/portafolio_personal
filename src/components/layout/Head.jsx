// src/components/layout/Head.jsx
import { useEffect } from "react";

const Head = () => {
  useEffect(() => {
    // Actualizar meta tags dinámicamente
    document.title = "Geovanni Casanova | Desarrollador Full Stack";

    // Meta tags principales
    const metaTags = [
      {
        name: "description",
        content:
          "Desarrollador Full Stack especializado en React, Angular y desarrollo web moderno. Experiencia en implementación de soluciones tecnológicas innovadoras.",
      },
      {
        name: "keywords",
        content:
          "desarrollador web, frontend, backend, react, angular, full stack, Mérida, Yucatán",
      },
      {
        property: "og:title",
        content: "Geovanni Casanova | Desarrollador Full Stack",
      },
      {
        property: "og:description",
        content:
          "Portfolio profesional mostrando proyectos y experiencia en desarrollo web moderno.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Geovanni Casanova | Desarrollador Full Stack",
      },
      {
        name: "twitter:description",
        content:
          "Portfolio profesional mostrando proyectos y experiencia en desarrollo web moderno.",
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
        name: "revisit-after",
        content: "7 days",
      },
      {
        name: "author",
        content: "Geovanni Casanova",
      },
    ];

    // Eliminar meta tags existentes
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

    // Agregar preload para fuentes
    const preloadLinks = [
      {
        rel: "preload",
        href: "/fonts/SpaceGrotesk-Bold.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/Inter-Regular.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ];

    preloadLinks.forEach((link) => {
      const linkElement = document.createElement("link");
      Object.keys(link).forEach((key) => {
        linkElement[key] = link[key];
      });
      document.head.appendChild(linkElement);
    });
  }, []);

  return null;
};

export default Head;
