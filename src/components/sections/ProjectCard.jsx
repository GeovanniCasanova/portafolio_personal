import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import OptimizedImage from "../common/OptimizedImage";
import PropTypes from "prop-types";

const ProjectCard = ({ project, index = 0, priority = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative bg-gray-900 rounded-xl overflow-hidden"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative aspect-[16/9]">
        <OptimizedImage
          src={project.image}
          alt={project.title}
          className="absolute inset-0"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90" />
      </div>

      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
          {project.title}
        </h3>

        <motion.p
          className="text-gray-300 text-sm md:text-base mb-4"
          animate={{
            height: isExpanded ? "auto" : "3em",
            overflow: "hidden",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {project.description}
        </motion.p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
          {project.tags?.length > 3 && (
            <span className="text-xs text-gray-400">
              +{project.tags.length - 3} más
            </span>
          )}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-2 mb-4"
            >
              <h4 className="text-sm font-semibold text-purple-300">
                Características:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm pl-2">
                {project.features?.map((feature, i) => (
                  <li key={i} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags?.slice(3).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex space-x-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Ver proyecto</span>
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-purple-500/20 hover:bg-purple-500/30 text-white px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              <span>Código</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    github: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    features: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number,
  priority: PropTypes.bool,
};

export default ProjectCard;
