import { motion } from "framer-motion";

export default function Pipelines() {
  return (
    <>
      {/* Horizontal Pipe */}

      <Pipe
        className="left-56 top-24 w-72 h-1"
        delay={0}
      />

      <Pipe
        className="left-56 bottom-28 w-80 h-1"
        delay={1}
      />

      {/* Vertical */}

      <PipeVertical
        className="left-[47%] top-36 h-48 w-1"
        delay={2}
      />
    </>
  );
}

function Pipe({ className, delay }) {
  return (
    <div
      className={`absolute bg-slate-700 rounded-full ${className}`}
    >
      <motion.div
        animate={{
          x: ["0%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay,
          ease: "linear",
        }}
        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400"
      />
    </div>
  );
}

function PipeVertical({ className, delay }) {
  return (
    <div
      className={`absolute bg-slate-700 rounded-full ${className}`}
    >
      <motion.div
        animate={{
          y: ["0%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay,
          ease: "linear",
        }}
        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400"
      />
    </div>
  );
}