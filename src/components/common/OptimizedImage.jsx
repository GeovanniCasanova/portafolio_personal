// src/components/common/OptimizedImage.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const OptimizedImage = ({
  src = "",
  alt = "",
  className = "",
  width = "100%",
  height = "auto",
  priority = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) {
      setError(true);
      setIsLoading(false);
      return;
    }

    if (priority) {
      setImageSrc(src);
      setIsLoading(false);
      return;
    }

    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
      setError(false);
    };

    img.onerror = () => {
      setError(true);
      setIsLoading(false);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, priority]);

  const generatePlaceholder = () => {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23333333'/%3E%3C/svg%3E`;
  };

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-800 ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Error al cargar la imagen</span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gray-800 animate-pulse"
            style={{
              backgroundImage: `url("${generatePlaceholder()}")`,
              backgroundSize: "cover",
              filter: "blur(10px)",
            }}
          />
        )}
      </AnimatePresence>

      <motion.img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  priority: PropTypes.bool,
};

export default OptimizedImage;
