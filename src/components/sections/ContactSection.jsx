import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    // {
    //   name: "Facebook",
    //   icon: Facebook,
    //   url: "https://facebook.com/tu.perfil",
    //   color: "hover:text-blue-500",
    //   username: "@tucuenta",
    // },
    // {
    //   name: "Instagram",
    //   icon: Instagram,
    //   url: "https://instagram.com/daniel.casanova13",
    //   color: "hover:text-pink-500",
    //   username: "@daniel.casanova13",
    // },
    // {
    //   name: "WhatsApp",
    //   icon: MessageCircle,
    //   url: "https://wa.me/9993568688",
    //   color: "hover:text-green-500",
    //   username: "+52 999 356 8688",
    // },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="mailto:daniel.casanovac13@gmail.com"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>Envíame un mensaje</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
