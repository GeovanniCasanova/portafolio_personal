// src/components/sections/HeroStats.jsx
import { motion } from "framer-motion";
import { Briefcase, Code, Award } from "lucide-react";
import PropTypes from "prop-types";

const StatCard = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300"
  >
    <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
      <Icon className="w-5 h-5 text-purple-400" />
    </div>
    <div>
      <p className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        {value}
      </p>
      <p className="text-xs text-gray-400">{label}</p>
    </div>
  </motion.div>
);

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

const HeroStats = () => {
  const stats = [
    { icon: Briefcase, value: "5+", label: "Años experiencia" },
    { icon: Code, value: "15+", label: "Proyectos completados" },
    { icon: Award, value: "3", label: "Industrias impactadas" },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} delay={0.8 + index * 0.2} />
      ))}
    </div>
  );
};

export default HeroStats;
