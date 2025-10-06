// src/App.jsx
import { motion } from "framer-motion";
import {
  Github,
  Code,
  Server,
  Mail,
  Cloud,
  Brain,
  Download,
  Facebook
} from "lucide-react";
import "@fontsource/space-grotesk";
import "@fontsource/inter";
import { useState } from "react";

// Componentes existentes
import ExperienceTimeline from "./components/sections/ExperienceTimeline";
import EducationSection from "./components/sections/EducationSection";
import AITools from "./components/sections/AITools";
import ProjectFilter from "./components/sections/ProjectFilter";
import SocialShare from "./components/common/SocialShare";
import ContactSection from "./components/sections/ContactSection";
import WhatsAppButton from "./components/common/WhatsAppButton";
import ProjectCard from "./components/sections/ProjectCard";
import Head from "./components/layout/Head";
import BusinessSolutions from "./components/sections/BusinessSolutions";
import ScrollIndicator from "./components/common/ScrollIndicator";

// NUEVOS COMPONENTES - Agregar estos imports
import TypingEffect from "./components/common/TypingEffect";
import HeroStats from "./components/sections/HeroStats";
import FloatingTechStack from "./components/sections/FloatingTechStack";

import { projects } from "./data/projects";

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  return (
    <>
      <Head />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section MEJORADO */}
        <section
          aria-label="Introducción"
          className="relative h-screen overflow-hidden"
        >
          {/* Background Effects */}
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

          {/* Floating Tech Stack - Solo desktop */}
          <FloatingTechStack />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative container mx-auto px-4 h-full flex items-center"
          >
            <div className="max-w-4xl">
              {/* Value Proposition */}
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-purple-400 font-medium mb-4 text-lg"
              >
                💡 Transformando ideas en soluciones digitales escalables
              </motion.p>

              {/* Main Title */}
              <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Geovanni Casanova
              </h1>

              {/* Typing Effect Subtitle */}
              <div className="text-xl md:text-3xl text-gray-300 mb-8 h-12">
                <TypingEffect
                  texts={[
                    "Desarrollador Full Stack",
                    "Especialista Frontend",
                    "Optimizador de Procesos de Ventas",
                    "Arquitecto de Soluciones Web",
                  ]}
                  className="text-xl md:text-3xl"
                />
              </div>

              {/* Stats Section */}
              <HeroStats />

              {/* CTAs Mejorados */}
              <div className="flex flex-wrap gap-4 mt-8">
                {/* Primary CTA con Glow Effect */}
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Ver Proyectos
                  </span>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                </motion.a>

                {/* Secondary CTA */}
                <motion.a
                  href="/cv-geovanni-casanova.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg font-medium hover:border-purple-500 transition-all duration-300 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Descargar CV
                </motion.a>

                {/* Social Links */}
                <a
                  href="https://www.facebook.com/profile.php?id=61575675205768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-500 transition-colors px-4 py-4"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="hidden md:inline">Facebook</span>
                </a>
                <a
                  href="mailto:daniel.casanovac13@gmail.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors px-4 py-4"
                >
                  <Mail className="w-6 h-6" />
                  <span className="hidden md:inline">Contacto</span>
                </a>
                <a
                  href="https://github.com/GeovanniCasanova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors px-4 py-4"
                >
                  <Github className="w-6 h-6" />
                  <span className="hidden md:inline">GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          <ScrollIndicator />
        </section>

        {/* Experience Timeline Section */}
        <ExperienceTimeline />

        <EducationSection />

        <BusinessSolutions />

        {/* Projects Section */}
        <section
          id="projects"
          aria-labelledby="projects-title"
          className="py-32 bg-gradient-to-b from-black to-gray-900"
        >
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
                <article
                  key={index}
                  className="project-card"
                  aria-labelledby={`project-title-${index}`}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    priority={index === 0}
                  />
                </article>
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

        {/* Contact Section */}
        <ContactSection />

        {/* Floating Buttons */}
        <WhatsAppButton />
        <SocialShare />
      </div>
    </>
  );
};

export default Portfolio;
