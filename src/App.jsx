// src/App.jsx
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code,
  Server,
  Mail,
  Cloud,
  Brain,
} from "lucide-react";
import "@fontsource/space-grotesk";
import "@fontsource/inter";

// Importar nuevos componentes
import ExperienceTimeline from "./components/sections/ExperienceTimeline";
import AITools from "./components/sections/AITools";

import codheyImage from "@/assets/images/codhey_web.png";
import oaxacaMielImage from "@/assets/images/oaxaca_miel_web.png";
import midHomesImage from "@/assets/images/yucatan_mid_homes.png";

const Portfolio = () => {
  const projects = [
    {
      title: "CODHEY",
      description:
        "Portal oficial de la Comisión de Derechos Humanos del Estado de Yucatán. Plataforma web completa que incluye sistema de gestión de contenidos, portal de transparencia y herramientas de accesibilidad para personas con discapacidad.",
      image: codheyImage,
      tags: ["Angular", "TypeScript", "Node.js", "Mysql", "Godaddy"],
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
      tags: ["React", "Node.js", "Express", "MySQL"],
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
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section con Parallax */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 animate-gradient"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-8 gap-4 opacity-10">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="w-32 h-32 bg-white/5 rounded-lg transform rotate-45"
              ></div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto px-4 h-full flex items-center"
        >
          <div className="max-w-3xl">
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Geovanni Casanova
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Desarrollador Frontend & Full Stack
            </p>
            <div className="flex space-x-6">
              <a
                href="mailto:daniel.casanovac13@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>Contacto</span>
              </a>
              <a
                href="https://github.com/GeovanniCasanova"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-6 border-2 border-white rounded-full"></div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <ExperienceTimeline />

      {/* Projects Section */}
      {/* Projects Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold mb-16 text-center"
          >
            Proyectos Destacados
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-xl"
              >
                {/* Imagen del proyecto */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay con información del proyecto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
                  <div className="absolute bottom-0 p-6 w-full">
                    {/* Título del proyecto */}
                    <h3 className="text-2xl font-display font-bold mb-2 text-white">
                      {project.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Lista de características */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2">
                        Características principales:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags de tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Botones de acción */}
                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Ver proyecto</span>
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-purple-500/20 hover:bg-purple-500/30 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span>Código</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <AITools />

      {/* Skills Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold mb-16 text-center"
          >
            Tecnologías
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-display font-bold ml-2">
                  Frontend
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-blue-300">React • Angular • Next.js</p>
                <p className="text-blue-300">TypeScript • Tailwind CSS</p>
                <p className="text-blue-300">Ionic • State Management</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-display font-bold ml-2">Backend</h3>
              </div>
              <div className="space-y-2">
                <p className="text-purple-300">Node.js • Express</p>
                <p className="text-purple-300">PHP • MySQL/SQL</p>
                <p className="text-purple-300">API Development</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <Cloud className="w-6 h-6 text-pink-400" />
                <h3 className="text-xl font-display font-bold ml-2">DevOps</h3>
              </div>
              <div className="space-y-2">
                <p className="text-pink-300">AWS • Digital Ocean</p>
                <p className="text-pink-300">Docker • CI/CD</p>
                <p className="text-pink-300">Cloud Architecture</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-display font-bold ml-2">
                  AI & Tools
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-green-300">ChatGPT • Claude</p>
                <p className="text-green-300">Gemini • LLaMA</p>
                <p className="text-green-300">Process Automation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
