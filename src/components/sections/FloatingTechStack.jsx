// src/components/sections/FloatingTechStack.jsx
import { motion } from "framer-motion";

const FloatingTechStack = () => {
  const technologies = [
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Angular", icon: "🅰️", color: "from-red-500 to-pink-600" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-600" },
    { name: "TypeScript", icon: "📘", color: "from-blue-500 to-indigo-600" },
    { name: "Tailwind", icon: "💨", color: "from-cyan-400 to-teal-500" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-400 to-purple-500" },
  ];

  const floatVariants = {
    animate: (i) => ({
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
      <div className="relative w-64 h-96">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            custom={index}
            variants={floatVariants}
            animate="animate"
            className="absolute group"
            style={{
              left: `${(index % 2) * 100}px`,
              top: `${index * 60}px`,
            }}
          >
            <div
              className={`
              relative p-3 rounded-xl backdrop-blur-sm
              bg-gradient-to-br ${tech.color} bg-opacity-10
              border border-gray-700/50
              hover:border-purple-500/50
              transition-all duration-300
              cursor-pointer
              hover:scale-110
            `}
            >
              <span className="text-3xl">{tech.icon}</span>

              {/* Tooltip */}
              <div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
              >
                {tech.name}
              </div>
            </div>

            {/* Glow effect */}
            <div
              className={`
              absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-30
              bg-gradient-to-br ${tech.color}
              transition-opacity duration-300 -z-10
            `}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FloatingTechStack;
