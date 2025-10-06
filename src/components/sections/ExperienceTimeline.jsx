import { motion } from "framer-motion";
import { Calendar, Server, Code, Database, Network, TrendingUp } from "lucide-react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      company: "Financiera - jc soluciones",
      period: "Febrero 2025 - Actual",
      role: "Desarrollador Full Stack & Optimización de Ventas",
      description: "Desarrollo de soluciones tecnológicas y optimización de procesos comerciales",
      icon: TrendingUp,
      achievements: [
        "Desarrollo de sistema web de solicitudes de crédito para clientes",
        "Optimización de flujos y procesos del área de ventas",
        "Implementación de sistema de enlaces personalizados por asesor",
        "Panel administrativo para control y seguimiento de ventas",
        "Análisis y mejora continua del proceso comercial",
        "Gestión de base de datos PostgreSQL y arquitectura backend"
      ],
      tech: [
        "Angular 19",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "TypeScript",
        "PostgreSQL"
      ],
      color: "orange",
    },
    {
      company: "31rooms",
      period: "Marzo 2024 - Enero 2025",
      role: "Desarrollador Frontend",
      description: "Desarrollo de aplicaciones frontend modernas y optimizadas",
      icon: Code,
      achievements: [
        "Implementación de interfaces responsivas con Tailwind CSS",
        "Desarrollo de componentes reutilizables con React, Next js",
        "Integración de herramientas de IA para optimización de procesos",
        "Implementación de mejores prácticas de desarrollo y patrones de diseño",
      ],
      tech: [
        "React",
        "Angular",
        "Tailwind CSS",
        "TypeScript",
        "AI Integration",
        "Bootstrap",
      ],
      color: "green",
    },
    {
      company: "PC Oriente",
      period: "2020 - Marzo 2024",
      role: "Desarrollador Full Stack",
      description: "Desarrollo de aplicaciones web y sistemas administrativos",
      icon: Code,
      achievements: [
        "Desarrollo de sistemas web con Angular, Node.js, y Next.js",
        "Implementación de proyectos WordPress con optimización y mantenimiento",
        "Despliegue de aplicaciones en DreamHost, Digital Ocean y AWS",
        "Gestión de bases de datos MySQL/SQL y sistemas de respaldo en la nube",
      ],
      tech: [
        "Angular",
        "Node.js",
        "Next.js",
        "TypeScript",
        "PHP",
        "MySQL",
        "AWS RDS",
        "Digital Ocean",
      ],
      color: "blue",
    },
    {
      company: "PC Oriente",
      period: "2018 - 2020",
      role: "Soporte Técnico & Infraestructura",
      description: "Gestión de infraestructura y soporte técnico integral",
      icon: Server,
      achievements: [
        "Configuración y mantenimiento de redes, incluyendo VPNs y puntos de acceso",
        "Instalación y configuración de sistemas operativos (Windows, Linux)",
        "Ensamblado y mantenimiento de equipos de cómputo",
        "Administración de servidores y servicios de red",
      ],
      tech: [
        "Windows Server",
        "Linux",
        "Networking",
        "Hardware Support",
        "VPN Configuration",
      ],
      color: "purple",
    },
  ];

  const techCategories = [
    {
      title: "Desarrollo Web",
      icon: Code,
      skills: ["Angular", "React", "Node.js", "TypeScript", "PHP", "Next.js"],
    },
    {
      title: "Infraestructura",
      icon: Server,
      skills: ["Digital Ocean", "AWS", "DreamHost", "Hostinger", "HostGator"],
    },
    {
      title: "Base de Datos",
      icon: Database,
      skills: ["MySQL", "SQL", "PostgreSQL", "AWS RDS", "Database Management"],
    },
    {
      title: "Redes",
      icon: Network,
      skills: [
        "VPN",
        "Networking",
        "Server Configuration",
        "Linux Administration",
      ],
    },
  ];

  return (
    <section
      className="py-32 bg-gradient-to-b from-gray-900 to-black"
      aria-labelledby="experience-title"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          id="experience-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display font-bold mb-16 text-center"
        >
          Experiencia Profesional
        </motion.h2>

        <div className="relative">
          {/* Timeline line - Desktop */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500 via-green-500 via-blue-500 via-purple-500 to-pink-500" />

          {/* Timeline line - Mobile */}
          <div className="md:hidden absolute left-8 h-full w-0.5 bg-gradient-to-b from-orange-500 via-green-500 via-blue-500 via-purple-500 to-pink-500" />

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
              {/* Timeline dot */}
              <div
                className={`absolute left-6 md:left-1/2 transform md:translate-x-[-50%] -translate-y-1/2 w-4 h-4 bg-${exp.color}-500 rounded-full border-2 border-white`}
                aria-hidden="true"
              />

              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <time className="text-purple-400 font-display">
                    {exp.period}
                  </time>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                <div className="flex items-center mb-4">
                  <exp.icon className="w-6 h-6 text-blue-400 mr-2" />
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

        {/* Skills Categories Section */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-display font-bold mb-8 text-center"
          >
            Áreas de Especialización
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/30 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <category.icon className="w-6 h-6 text-purple-400 mr-2" />
                  <h4 className="text-lg font-semibold">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;