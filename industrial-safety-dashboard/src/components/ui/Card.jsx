import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
      }}
      whileHover={{
        y: -5,
        scale: 1.01,
      }}
      className={`
        bg-slate-900/90
        backdrop-blur-xl
        border
        border-slate-700/60
        rounded-2xl
        shadow-lg
        hover:shadow-cyan-500/10
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}