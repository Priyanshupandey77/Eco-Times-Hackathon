import {
  LayoutDashboard,
  Map,
  TriangleAlert,
  Users,
  Radio,
  Bot,
  FileText,
  Settings,
  Shield,
} from "lucide-react";

import { motion } from "framer-motion";

const menuItems = [
  { icon: LayoutDashboard, title: "Dashboard", active: true },
  { icon: Map, title: "Plant Map" },
  { icon: TriangleAlert, title: "Alerts" },
  { icon: Users, title: "Workers" },
  { icon: Radio, title: "Sensors" },
  { icon: Bot, title: "AI Assistant" },
  { icon: FileText, title: "Reports" },
  { icon: Settings, title: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-slate-950 border-r border-slate-800 flex flex-col">

      {/* Logo */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-7 border-b border-slate-800"
      >
        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">

            <Shield className="text-white" />

          </div>

          <div>

            <h1 className="text-white text-xl font-bold">
              SafeAI
            </h1>

            <p className="text-slate-400 text-sm">
              Industrial Safety
            </p>

          </div>

        </div>
      </motion.div>

      {/* Navigation */}

      <nav className="flex-1 px-5 py-6 space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <motion.button
              whileHover={{
                x: 5,
              }}
              whileTap={{
                scale: 0.97,
              }}
              key={item.title}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                item.active
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.title}
              </span>
            </motion.button>
          );
        })}
      </nav>

      {/* Footer */}

      <div className="p-5 border-t border-slate-800">

        <div className="rounded-xl bg-slate-900 p-4">

          <div className="flex items-center justify-between">

            <span className="text-slate-400">
              System Status
            </span>

            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

          </div>

          <h3 className="text-green-400 mt-2 font-semibold">
            All Systems Operational
          </h3>

        </div>

      </div>

    </aside>
  );
}