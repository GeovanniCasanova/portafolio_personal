// src/components/sections/ProjectFilter.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import PropTypes from "prop-types";

const ProjectFilter = ({ projects = [], onFilterChange = () => {} }) => {
  const [selectedFilter, setSelectedFilter] = useState("Todos");

  // Extraer categorías únicas de los proyectos de forma segura
  const categories = ["Todos"];
  projects.forEach((project) => {
    if (project.tags && Array.isArray(project.tags)) {
      project.tags.forEach((tag) => {
        const mainCategory = tag.split("/")[0];
        if (!categories.includes(mainCategory)) {
          categories.push(mainCategory);
        }
      });
    }
  });

  const handleFilterChange = (category) => {
    setSelectedFilter(category);
    if (category === "Todos") {
      onFilterChange(projects);
    } else {
      const filtered = projects.filter(
        (project) =>
          project.tags &&
          Array.isArray(project.tags) &&
          project.tags.some((tag) => tag.startsWith(category))
      );
      onFilterChange(filtered);
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-center flex-wrap gap-4">
        <div className="flex items-center space-x-2 mb-4 text-gray-400">
          <Filter className="w-4 h-4" />
          <span className="text-sm">Filtrar por:</span>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${
                  selectedFilter === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
              {selectedFilter === category && (
                <motion.span
                  className="ml-2 inline-block"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  ✓
                </motion.span>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-4 rounded-full"
        style={{
          scaleX: selectedFilter === "Todos" ? 1 : 0.5,
          transformOrigin: "left",
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

ProjectFilter.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  onFilterChange: PropTypes.func,
};

export default ProjectFilter;
