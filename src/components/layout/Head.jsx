// src/components/layout/Head.jsx
import { useEffect } from "react";
import { projects } from "@/data/projects";

const Head = () => {
  useEffect(() => {
    // URL del sitio - Dominio personalizado
    const siteUrl = "https://geovannicasanova.dev";

    // Imagen Open Graph optimizada (1200x630px)
    const ogImage = `${siteUrl}/preview.png`;

    const baseConfig = {
      title: "Geovanni Casanova | Desarrollador Full Stack",
      description:
        "Desarrollador Full Stack especializado en React, Angular, Node.js y TypeScript. 5+ años transformando ideas en soluciones digitales escalables. Portafolio de proyectos web modernos.",
      image: ogImage,
    };

    // Canonical URL
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = siteUrl;
    document.head.appendChild(canonical);

    // Structured Data (Schema.org)
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${siteUrl}/#person`,
          name: "Geovanni Casanova",
          jobTitle: "Desarrollador Full Stack",
          description: baseConfig.description,
          image: ogImage,
          sameAs: [
            "https://github.com/GeovanniCasanova",
            "https://www.linkedin.com/in/geovanni-casanova-b03a15227/",
            "https://www.facebook.com/profile.php?id=61575675205768",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Financiera - jc soluciones",
          },
          knowsAbout: [
            "React",
            "Angular",
            "Node.js",
            "TypeScript",
            "Full Stack Development",
            "PostgreSQL",
          ],
        },
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          url: siteUrl,
          name: "Geovanni Casanova | Desarrollador Full Stack",
          description: baseConfig.description,
          publisher: {
            "@id": `${siteUrl}/#person`,
          },
          inLanguage: "es-ES",
        },
        // Proyectos como SoftwareApplication
        ...projects.map((project, index) => ({
          "@type": "SoftwareApplication",
          "@id": `${siteUrl}#project-${index}`,
          name: project.title,
          description: project.description,
          url: project.link,
          image: project.image,
          applicationCategory: "WebApplication",
          operatingSystem: "Any",
        })),
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Meta tags optimizados para Open Graph
    const metaTags = [
      // Meta tags básicos
      {
        name: "title",
        content: baseConfig.title,
      },
      {
        name: "description",
        content: baseConfig.description,
      },
      {
        name: "keywords",
        content:
          "desarrollador full stack, react developer, angular developer, node.js, typescript, postgresql, frontend, backend, méxico, yucatán, mérida, web developer, geovanni casanova",
      },

      // Open Graph / Facebook - OPTIMIZADO
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
        content: baseConfig.title,
      },
      {
        property: "og:description",
        content: baseConfig.description,
      },
      {
        property: "og:site_name",
        content: "Geovanni Casanova Portfolio",
      },
      {
        property: "og:locale",
        content: "es_MX",
      },

      // Imágenes Open Graph - MEJORADO
      {
        property: "og:image",
        content: ogImage,
      },
      {
        property: "og:image:secure_url",
        content: ogImage,
      },
      {
        property: "og:image:type",
        content: "image/png",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content:
          "Geovanni Casanova - Desarrollador Full Stack | React, Angular, Node.js",
      },

      // Twitter Card - OPTIMIZADO
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
        content: baseConfig.title,
      },
      {
        name: "twitter:description",
        content: baseConfig.description,
      },
      {
        name: "twitter:image",
        content: ogImage,
      },
      {
        name: "twitter:image:alt",
        content: "Geovanni Casanova - Portfolio Profesional",
      },

      // Meta tags adicionales
      {
        name: "theme-color",
        content: "#000000",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large",
      },
      {
        name: "language",
        content: "Spanish",
      },
      {
        name: "author",
        content: "Geovanni Casanova",
      },

      // Geo tags (México, Yucatán)
      {
        name: "geo.region",
        content: "MX-YUC",
      },
      {
        name: "geo.placename",
        content: "Mérida",
      },
    ];

    // Limpiar meta tags existentes (excepto viewport y charset)
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

    // Actualizar título
    document.title = baseConfig.title;

    // Preload de imagen crítica para performance
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.href = ogImage;
    document.head.appendChild(preloadLink);

    // Cleanup function
    return () => {
      document
        .querySelectorAll('script[type="application/ld+json"]')
        .forEach((s) => s.remove());
      canonical.remove();
      preloadLink.remove();
    };
  }, []);

  return null;
};

export default Head;
