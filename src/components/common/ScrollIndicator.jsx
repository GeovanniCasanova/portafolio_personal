import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      initial={{ y: 0 }}
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <ChevronDown className="w-8 h-8 text-white opacity-75" />
    </motion.div>
  );
};

export default ScrollIndicator;
