/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Wallet,
  Smartphone,
  Share2,
  Sparkles,
  Copy,
  CheckCircle,
  User,
} from "lucide-react";

const BusinessSolutions = () => {
  const [activeDemo, setActiveDemo] = useState(null);

  const solutions = [
    {
      title: "Menús Digitales",
      icon: Smartphone,
      description:
        "Menús interactivos y atractivos para restaurantes y cafeterías",
      features: [
        "Diseños personalizados",
        "Actualización en tiempo real",
        "Códigos QR para mesas",
        "Responsive y rápido",
      ],
    },
    {
      title: "Datos Bancarios",
      icon: CreditCard,
      description:
        "Sistema seguro para compartir información de pago con clientes",
      features: [
        "Copiado con un clic",
        "Múltiples cuentas",
        "Interface intuitiva",
        "Datos protegidos",
      ],
    },
    {
      title: "Sistema Integral",
      icon: Share2,
      description: "Solución completa para la presencia digital de tu negocio",
      features: [
        "Panel de administración",
        "Analíticas básicas",
        "Soporte técnico",
        "Actualizaciones incluidas",
      ],
    },
  ];

  const demoFrames = {
    menu: {
      title: "Demo Menú Digital",
      component: (
        <div className="bg-gray-100 rounded-lg p-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[#FFF9E6]"></div>
          <div className="relative">
            {/* Encabezado */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#8B4513] font-display mb-2">
                La Morenita
              </h3>
              <p className="text-xl text-[#CC0000]">Menú del Día</p>
            </div>

            {/* Especialidad */}
            <div className="bg-[#CC0000]/10 rounded-lg p-4 mb-8 text-center">
              <p className="text-xl font-bold text-[#CC0000] mb-1">
                ¡ESPECIALIDAD HOY!
              </p>
              <p className="text-[#8B4513]">Ostras | Desde 7:30 AM</p>
            </div>

            {/* Antojitos */}
            <div className="mb-8">
              <h4 className="text-xl text-[#8B4513] text-center mb-4">
                Nuestros Antojitos
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <p className="text-[#8B4513]">🥖 Tortas</p>
                  <p className="text-[#8B4513]">🌮 Tacos</p>
                  <p className="text-[#8B4513]">🥙 Ostras</p>
                  <p className="text-[#8B4513]">🥙 Salbutes</p>
                </div>
                <div className="space-y-3">
                  <p className="text-[#8B4513]">🥙 Panuchos</p>
                  <p className="text-[#8B4513]">🌮 Tostadas</p>
                  <p className="text-[#8B4513]">🫓 Gringas</p>
                  <p className="text-[#8B4513]">🔥 Empanadas</p>
                </div>
              </div>
            </div>

            {/* Proteínas */}
            <div className="bg-[#8B4513]/10 rounded-lg p-4 mb-8 text-center">
              <p className="text-[#8B4513] mb-3">Elige tu proteína favorita:</p>
              <p className="text-gray-600 mb-2">
                🍖 Carne Asada | 🍗 Pavo Asado | 🥪 Jamón y Queso
              </p>
              <p className="text-gray-600 italic text-sm mb-2">
                (Se puede preparar cualquier combinación)
              </p>
              <p className="text-gray-600 text-sm">
                Todos nuestros antojitos son preparados al momento
              </p>
            </div>

            {/* Adicionales */}
            <div className="mb-8">
              <h4 className="text-xl text-[#8B4513] text-center mb-4">
                Antojitos Adicionales
              </h4>
              <div className="text-center space-y-2">
                <p className="text-[#8B4513]">🔥 Empanadas</p>
                <p className="text-[#8B4513]">🔥 Polcanes</p>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center">
              <p className="text-gray-600 mb-2">
                Horario de Hoy: 7:30 AM - 1:00 PM
              </p>
              <p className="text-gray-600 mb-3">¡Gracias por tu preferencia!</p>
              <p className="text-[#CC0000]">Tel: 999-156-6066</p>
            </div>
          </div>
        </div>
      ),
    },
    bank: {
      title: "Demo Datos Bancarios",
      component: (() => {
        const [copiedField, setCopiedField] = useState(null);

        const bankData = {
          account: "1234 5678 9012",
          clabe: "012345678901234567",
          holder: "Juan Pérez",
        };

        const copyToClipboard = async (text, field) => {
          try {
            await navigator.clipboard.writeText(text);
            setCopiedField(field);
            setTimeout(() => setCopiedField(null), 2000);
          } catch (err) {
            console.error("Error al copiar:", err);
          }
        };

        return (
          <div className="bg-gray-800 rounded-lg p-4">
            <h4 className="text-xl font-display font-bold mb-4">
              Información de Pago
            </h4>
            <div className="space-y-4">
              {/* Titular */}
              <div className="bg-gray-700/50 rounded-lg p-3 group relative">
                <label className="text-sm text-gray-400 mb-1 block">
                  Titular
                </label>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="font-mono text-gray-200">
                      {bankData.holder}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankData.holder, "holder")}
                    className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
                  >
                    {copiedField === "holder" ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400 group-hover:text-purple-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Cuenta */}
              <div className="bg-gray-700/50 rounded-lg p-3 group relative">
                <label className="text-sm text-gray-400 mb-1 block">
                  Cuenta BBVA
                </label>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Wallet className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="font-mono text-gray-200">
                      {bankData.account}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankData.account, "account")}
                    className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
                  >
                    {copiedField === "account" ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400 group-hover:text-purple-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* CLABE */}
              <div className="bg-gray-700/50 rounded-lg p-3 group relative">
                <label className="text-sm text-gray-400 mb-1 block">
                  CLABE
                </label>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CreditCard className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="font-mono text-gray-200">
                      {bankData.clabe}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankData.clabe, "clabe")}
                    className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
                  >
                    {copiedField === "clabe" ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400 group-hover:text-purple-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })(),
    },
  };

  return (
    <section className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Soluciones para Negocios
          </h2>
          <p className="text-xl text-gray-300">
            Herramientas digitales modernas para tu empresa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <solution.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-display font-bold ml-3">
                  {solution.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-4">{solution.description}</p>

              <ul className="space-y-2">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {solution.title !== "Sistema Integral" && (
                <button
                  onClick={() =>
                    setActiveDemo(
                      solution.title === "Menús Digitales" ? "menu" : "bank"
                    )
                  }
                  className="mt-6 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors w-full"
                >
                  Ver Demo
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Demo Section */}
        {activeDemo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-display font-bold mb-6">
              {demoFrames[activeDemo].title}
            </h3>
            {demoFrames[activeDemo].component}
            <button
              onClick={() => setActiveDemo(null)}
              className="mt-4 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700/70 transition-colors w-full"
            >
              Cerrar Demo
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-display font-bold mb-4">
            ¿Listo para digitalizar tu negocio?
          </h3>
          <p className="text-gray-300 mb-8">
            Contáctame para crear una solución personalizada para tu empresa
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
