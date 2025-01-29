// src/components/sections/ExperienceTimeline.jsx
import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      company: "31rooms",
      period: "marzo 2024 - Actual",
      role: "Desarrollador Frontend",
      description:
        "Desarrollo de aplicaciones frontend utilizando React y Angular",
      achievements: [
        "Implementación de interfaces responsivas con Tailwind CSS",
        "Desarrollo de componentes reutilizables con React y Angular",
        "Integración de herramientas de IA para optimización de procesos",
      ],
      tech: ["React", "Angular", "Tailwind CSS", "ChatGPT", "Claude"],
    },
    {
      company: "Pc Oriente",
      period: "diciembre 2020 - marzo 2024",
      role: "Desarrollador Web",
      description:
        "Gestión integral de proyectos web y configuración de infraestructura",
      achievements: [
        "Configuración de dominios y hosting en DreamHost y HostGator",
        "Administración de servidores en Digital Ocean",
        "Desarrollo Full Stack con Angular, Node.js y PHP",
      ],
      tech: ["Angular", "Node.js", "PHP", "Digital Ocean", "AWS"],
    },
    {
      company: "Pc Oriente",
      period: "mayo 2020 - marzo 2024",
      role: "Desarrollador de Software",
      description: "Desarrollo Full Stack y administración de bases de datos",
      achievements: [
        "Desarrollo de sitios web con múltiples tecnologías",
        "Gestión de bases de datos MySQL y SQL",
        "Implementación de sistemas de respaldo con AWS RDS",
      ],
      tech: ["MySQL", "AWS RDS", "TypeScript", "Next.js", "PHP"],
    },
  ];

  return (
    <section
      aria-labelledby="experience-title"
      className="py-32 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display font-bold mb-16 text-center"
        >
          Experiencia Profesional
        </motion.h2>

        <div className="relative">
          {/* Línea vertical de la timeline - Solo visible en desktop */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* Línea vertical para móvil */}
          <div className="md:hidden absolute left-8 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-20 pl-16 md:pl-0 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Círculo indicador en la línea del tiempo */}
              <div className="absolute left-6 md:left-1/2 transform md:translate-x-[-50%] -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>

              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-display">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                <div className="flex items-center mb-4">
                  <Building2 className="w-6 h-6 text-blue-400 mr-2" />
                  <h3 className="text-xl font-display font-bold">
                    {exp.company}
                  </h3>
                </div>

                <h4 className="text-lg font-semibold text-purple-300 mb-2">
                  {exp.role}
                </h4>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-400 mb-2">
                    Logros principales:
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
