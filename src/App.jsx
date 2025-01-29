// src/App.jsx
import { motion } from "framer-motion";
import { Github, Code, Server, Mail, Cloud, Brain } from "lucide-react";
import "@fontsource/space-grotesk";
import "@fontsource/inter";
import { useState } from "react";

// Importar nuevos componentes
import ExperienceTimeline from "./components/sections/ExperienceTimeline";
import EducationSection from "./components/sections/EducationSection";
import AITools from "./components/sections/AITools";
import ProjectFilter from "./components/sections/ProjectFilter";
import SocialShare from "./components/common/SocialShare";
import ContactSection from "./components/sections/ContactSection";
import WhatsAppButton from "./components/common/WhatsAppButton";
import ProjectCard from "./components/sections/ProjectCard";
import Head from "./components/layout/Head";
import { projects } from "./data/projects";
import BusinessSolutions from "./components/sections/BusinessSolutions";

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  return (
    <>
      <Head />
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

        <EducationSection />

        <BusinessSolutions />

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

            <ProjectFilter
              projects={projects}
              onFilterChange={setFilteredProjects}
            />

            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  priority={index === 0}
                />
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
                  <h3 className="text-xl font-display font-bold ml-2">
                    Backend
                  </h3>
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
                  <h3 className="text-xl font-display font-bold ml-2">
                    DevOps
                  </h3>
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

        {/* Agregar la nueva sección de contacto */}
        <ContactSection />

        {/* Botón flotante de compartir */}
        <WhatsAppButton />
        <SocialShare />
      </div>
    </>
  );
};

export default Portfolio;
