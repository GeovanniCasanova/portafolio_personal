// src/components/sections/ContactSection.jsx
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Facebook, MessageSquare } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "Facebook Empresarial",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61575675205768",
      color: "hover:text-blue-500",
      username: "Geovanni Sistemas",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/GeovanniCasanova",
      color: "hover:text-gray-400",
      username: "@GeovanniCasanova",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/geovanni-casanova-b03a15227/",
      color: "hover:text-blue-600",
      username: "Geovanni Casanova",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:daniel.casanovac13@gmail.com",
      color: "hover:text-red-500",
      username: "daniel.casanovac13@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      role="contentinfo"
      className="py-24 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Conectemos
          </h2>
          <p className="text-xl text-gray-300">
            Estoy disponible para nuevos proyectos y oportunidades
          </p>
        </motion.div>

        {/* Formulario de Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <MessageSquare className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl font-display font-bold">
              Envíame un Mensaje
            </h3>
          </div>
          <ContactForm />
        </motion.div>

        {/* Separador */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-gradient-to-b from-gray-900 to-black text-gray-400">
              O conéctate por redes sociales
            </span>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group block p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-lg bg-gray-700/50 ${social.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <social.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {social.name}
                  </h3>
                  <p className="text-sm text-gray-400">{social.username}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Alternativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">
            ¿Prefieres una llamada o WhatsApp?
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:+529991328933"
              className="inline-flex items-center gap-2 bg-gray-800/50 hover:bg-gray-800/70 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>+52 999 132 8933</span>
            </a>
            <a
              href="https://wa.me/529991328933"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
