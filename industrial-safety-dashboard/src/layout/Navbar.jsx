import {
  Bell,
  Search,
  Moon,
  UserCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="sticky top-0 z-50 h-20 border-b border-slate-800 bg-slate-950/70 backdrop-blur-xl"
    >
      <div className="h-full px-8 flex items-center justify-between">

        {/* Left */}

        <div>
          <h1 className="text-2xl font-bold text-white">
            Industrial Safety
          </h1>

          <p className="text-sm text-slate-400">
            AI Monitoring Dashboard
          </p>
        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Search */}

          <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 w-72">

            <Search
              className="text-slate-500"
              size={18}
            />

            <input
              placeholder="Search..."
              className="bg-transparent outline-none text-white flex-1 placeholder:text-slate-500"
            />

          </div>

          {/* Theme */}

          <button className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-cyan-500 transition">

            <Moon size={18} />

          </button>

          {/* Notification */}

          <button className="relative w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-cyan-500 transition">

            <Bell size={18} />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

          </button>

          {/* Profile */}

          <div className="flex items-center gap-3 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2">

            <UserCircle2
              className="text-cyan-400"
              size={34}
            />

            <div>

              <h3 className="text-white font-medium">
                Safety Officer
              </h3>

              <p className="text-xs text-slate-400">
                Administrator
              </p>

            </div>

          </div>

        </div>

      </div>
    </motion.header>
  );
}