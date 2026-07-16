import { motion } from "framer-motion";
import {
  HardHat,
  Radio,
  Cog,
  TriangleAlert,
} from "lucide-react";

import Pipelines from "./Pipelines";

export default function FactoryMap() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#07111f]">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Header */}
      <div className="absolute top-5 left-5 z-20">
        <h2 className="text-2xl font-bold text-white">
          Factory Digital Twin
        </h2>

        <p className="text-slate-400 text-sm">
          Real-Time Industrial Monitoring
        </p>
      </div>

      {/* Animated Pipes */}
      <Pipelines />

      {/* Factory Zones */}

      <Zone
        title="Boiler Room"
        className="left-10 top-24 w-52 h-32"
      />

      <Zone
        title="Warehouse"
        className="right-10 top-20 w-72 h-40"
      />

      <Zone
        title="Tank Area"
        className="left-12 bottom-14 w-44 h-32"
      />

      <Zone
        title="Machine Line"
        className="right-16 bottom-10 w-64 h-32"
      />

      {/* Workers */}

      <Marker
        icon={<HardHat size={18} />}
        color="bg-green-500"
        className="left-[36%] top-[38%]"
      />

      <Marker
        icon={<HardHat size={18} />}
        color="bg-green-500"
        className="left-[20%] bottom-[22%]"
      />

      {/* Sensors */}

      <Marker
        icon={<Radio size={18} />}
        color="bg-cyan-500"
        className="left-[58%] top-[48%]"
      />

      {/* Machine */}

      <Marker
        icon={<Cog size={18} />}
        color="bg-slate-500"
        className="right-[22%] bottom-[26%]"
      />

      {/* Machine Status Light */}

      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="absolute right-[20%] bottom-[24%] w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500"
      />

      {/* Hazard Zone */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute right-[38%] top-[44%]"
      >
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-500/20 border border-red-500">

          <TriangleAlert
            size={28}
            className="text-red-500"
          />

        </div>
      </motion.div>

      {/* Bottom Stats */}

      <div className="absolute bottom-5 left-5 right-5 z-20 grid grid-cols-4 gap-4">

        <BottomCard
          title="Workers"
          value="18"
        />

        <BottomCard
          title="Sensors"
          value="42"
        />

        <BottomCard
          title="Hazards"
          value="02"
        />

        <BottomCard
          title="Uptime"
          value="99.8%"
        />

      </div>

    </div>
  );
}

/* ------------------------- */

function Zone({ title, className }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      className={`absolute rounded-2xl border border-slate-700 bg-slate-900/90 backdrop-blur-md flex items-center justify-center shadow-xl ${className}`}
    >
      <h3 className="font-semibold text-slate-200">
        {title}
      </h3>
    </motion.div>
  );
}

/* ------------------------- */

function Marker({
  icon,
  color,
  className,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className={`absolute z-20 ${className}`}
    >
      <div
        className={`w-11 h-11 rounded-full ${color} flex items-center justify-center shadow-lg text-white`}
      >
        {icon}
      </div>
    </motion.div>
  );
}

/* ------------------------- */

function BottomCard({
  title,
  value,
}) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/90 backdrop-blur-md p-3">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h3 className="text-white text-2xl font-bold mt-1">
        {value}
      </h3>

    </div>
  );
}