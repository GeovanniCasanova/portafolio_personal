// src/components/sections/AITools.jsx
import { motion } from "framer-motion";
import { Brain, Bot, Sparkles, Workflow } from "lucide-react";

const AITools = () => {
  const aiExperience = [
    {
      tool: "ChatGPT & Claude",
      description:
        "Integración de modelos de lenguaje para automatización de tareas y asistencia en desarrollo",
      use_cases: [
        "Optimización de procesos de desarrollo",
        "Generación y revisión de código",
        "Automatización de documentación",
      ],
      icon: Bot,
    },
    {
      tool: "Gemini",
      description:
        "Utilización de capacidades multimodales para análisis y procesamiento de datos",
      use_cases: [
        "Análisis de imágenes y código",
        "Generación de contenido multimodal",
        "Procesamiento de datos estructurados",
      ],
      icon: Brain,
    },
    {
      tool: "LLaMA",
      description:
        "Implementación de modelos de IA open-source para soluciones personalizadas",
      use_cases: [
        "Desarrollo de chatbots especializados",
        "Procesamiento de lenguaje natural",
        "Análisis de sentimientos",
      ],
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Experiencia en IA
          </h2>
          <p className="text-xl text-gray-300">
            Integración de herramientas de IA para optimizar procesos de
            desarrollo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {aiExperience.map((item, index) => (
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
                <h3 className="text-xl font-display font-bold ml-3">
                  {item.tool}
                </h3>
              </div>

              <p className="text-gray-300 mb-4">{item.description}</p>

              <ul className="space-y-2">
                {item.use_cases.map((useCase, i) => (
                  <li key={i} className="flex items-start">
                    <Workflow className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{useCase}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITools;
