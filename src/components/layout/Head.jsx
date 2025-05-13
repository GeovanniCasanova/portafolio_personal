// src/components/layout/Head.jsx
import { useEffect } from "react";
import { projects } from "@/data/projects";

const Head = () => {
  useEffect(() => {
    // URL base del sitio
    const siteUrl = "https://geovannicasanova.dev";
    // Es mejor usar PNG o JPG para Open Graph en lugar de SVG
    const defaultImage = `${siteUrl}/preview.png`;
    const baseConfig = {
      title: "Geovanni Casanova | Desarrollador Full Stack",
      description:
        "Desarrollador Full Stack especializado en React, Angular y tecnologías modernas. Experiencia en desarrollo web, aplicaciones móviles y soluciones empresariales.",
      image: defaultImage,
    };

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Geovanni Casanova",
      jobTitle: "Desarrollador Full Stack",
      url: "https://geovannicasanova.dev/",
      sameAs: [
        "https://github.com/GeovanniCasanova",
        "https://www.linkedin.com/in/geovanni-casanova-b03a15227/",
      ],
    };

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = siteUrl;
    document.head.appendChild(canonical);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
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
      {
        property: "og:site_name",
        content: "Geovanni Casanova Portfolio",
      },
      {
        property: "og:locale",
        content: "es_ES",
      },
      {
        property: "og:image:alt",
        content: "Geovanni Casanova - Desarrollador Full Stack",
      },
      // WhatsApp específicos (aunque WhatsApp usa Open Graph, estos ayudan a asegurar compatibilidad)
      {
        property: "og:image:secure_url",
        content: defaultImage,
      },
      {
        property: "og:image:type",
        content: "image/png",
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
      {
        name: "keywords",
        content:
          "desarrollo web, frontend, backend, react, angular, full stack, méxico, yucatán, mérida, desarrollador web, programador",
      },
      // Verificación de sitio web (reemplaza con tus propios códigos de verificación)
      {
        name: "google-site-verification",
        content: "tu-código-de-verificación-de-google",
      },
    ];
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${siteUrl}/#person`,
          name: "Geovanni Casanova",
          jobTitle: "Desarrollador Full Stack",
          description: baseConfig.description,
          image: `${siteUrl}/profile.jpg`,
          sameAs: [
            "https://github.com/GeovanniCasanova",
            "https://www.linkedin.com/in/geovanni-casanova-b03a15227/",
          ],
          worksFor: {
            "@type": "Organization",
            name: "31rooms",
          },
          knowsAbout: [
            "React",
            "Angular",
            "Node.js",
            "TypeScript",
            "Full Stack Development",
          ],
          // Agregar habilidades específicas
          hasOccupation: {
            "@type": "Occupation",
            name: "Full Stack Developer",
            skills: [
              "React",
              "Angular",
              "Node.js",
              "AWS",
              "Digital Ocean",
              "TypeScript",
            ],
          },
          // Agregar portafolio como CreativeWork
          mainEntityOfPage: {
            "@type": "CreativeWork",
            "@id": `${siteUrl}/#portfolio`,
            name: "Portfolio de Desarrollo Full Stack",
            abstract: "Colección de proyectos y experiencias en desarrollo web",
          },
        },
        // Agregar WorkExperience
        {
          "@type": "WorkExperience",
          "@id": `${siteUrl}/#experience`,
          jobTitle: "Desarrollador Frontend",
          employmentType: "Full-time",
          organization: {
            "@type": "Organization",
            name: "31rooms",
          },
          startDate: "2024-03",
        },
        // Proyecto como SoftwareApplication
        ...projects.map((project, index) => ({
          "@type": "SoftwareApplication",
          "@id": `${siteUrl}#project-${index}`,
          name: project.title,
          description: project.description,
          url: project.link,
          image: project.image,
          applicationCategory: "WebApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            availability: "http://schema.org/InStock",
            price: "0",
            priceCurrency: "USD",
          },
        })),
        // Agregar WebSite schema para mejorar SEO
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
      ],
    };

    const existingSchema = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingSchema) {
      existingSchema.remove();
    }

    const scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.text = JSON.stringify(schema);
    document.head.appendChild(scriptTag);

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
