import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Code,
  Shield,
  MessageSquare,
} from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      type: "university",
      school: "Universidad Mesoamericana de San Agustín",
      degree: "Gestión de Tecnologías de la Información",
      period: "2018 - 2022",
      status: "Titulado",
      link: "https://umsa.edu.mx/",
      icon: GraduationCap,
    },
    {
      type: "diploma",
      school: "CIC-MHC IPICYT",
      degree: "Diplomado en Inteligencia Artificial Aplicada",
      period: "2024 - Presente",
      status: "En curso",
      link: "https://cic.mhc.ipicyt.edu.mx/diplomado-en-inteligencia-artificial-aplicada/",
      icon: Award,
    },
  ];

  const certifications = [
    {
      category: "Desarrollo Frontend",
      icon: Code,
      courses: [
        {
          title: "Angular 17: Creación de Aplicaciones Web",
          link: "https://platzi.com/p/daniel.casanovac13/curso/8352-angular/diploma/detalle/",
          date: "2024",
        },
      ],
    },
    {
      category: "Inteligencia Artificial",
      icon: MessageSquare,
      courses: [
        {
          title: "Creación de Páginas Web con ChatGPT",
          link: "https://platzi.com/p/daniel.casanovac13/curso/10568-paginas-web-chatgpt/diploma/detalle/",
          date: "2024",
        },
        {
          title: "Prompt Engineering con ChatGPT",
          link: "https://platzi.com/p/daniel.casanovac13/curso/7296-prompt-engineering-chatgpt/diploma/detalle/",
          date: "2024",
        },
      ],
    },
    {
      category: "Seguridad y Backend",
      icon: Shield,
      courses: [
        {
          title: "Ciberseguridad y Privacidad para Empresas",
          link: "https://platzi.com/p/daniel.casanovac13/curso/10928-intro-ciberseguridad-empresas/diploma/det",
          date: "2024",
        },
        {
          title: "Backend con Node.js: API REST con Express.js",
          link: "https://platzi.com/p/daniel.casanovac13/curso/2485-backend-nodejs/diploma/detalle/",
          date: "2024",
        },
      ],
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display font-bold mb-16 text-center"
        >
          Formación Académica
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-display font-bold ml-3 hover:text-blue-400 transition-colors"
                >
                  {item.school}
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-lg font-semibold text-purple-300">
                  {item.degree}
                </p>
                <p className="text-gray-400">
                  {item.period}
                  <span className="ml-2 px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {item.status}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-display font-bold mb-8 text-center"
        >
          Certificaciones Platzi
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-display font-bold ml-3">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.courses.map((course, i) => (
                  <div key={i} className="border-l-2 border-purple-500/30 pl-4">
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-300 transition-colors block"
                    >
                      {course.title}
                      <span className="text-sm text-gray-500 block mt-1">
                        {course.date}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
