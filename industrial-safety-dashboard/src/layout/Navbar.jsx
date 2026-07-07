import { useEffect, useState } from "react";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaRegClock,
} from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 h-20 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="h-full px-8 flex items-center justify-between">

        {/* Search */}
        <div className="relative w-96">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

          <input
            type="text"
            placeholder="Search workers, sensors, reports..."
            className="w-full h-11 rounded-xl bg-slate-800 border border-slate-700 pl-11 pr-16 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
          />

          <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-[11px] text-slate-400">
            Ctrl K
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Live Status */}
          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 h-11">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>

            <span className="text-sm font-medium text-emerald-400">
              System Live
            </span>
          </div>

          {/* Live Clock */}
          <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 h-11">
            <FaRegClock className="text-cyan-400" />

            <span className="text-sm font-medium text-white">
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </span>
          </div>

          {/* Notifications */}
          <button className="relative h-11 w-11 rounded-xl border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
            <FaBell />

            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              3
            </span>
          </button>

          {/* Settings */}
          <button className="h-11 w-11 rounded-xl border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
            <IoSettingsOutline size={20} />
          </button>

          {/* Divider */}
          <div className="h-8 w-px bg-slate-700"></div>

          {/* Profile */}
          <button className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 hover:border-cyan-500 transition-all duration-300">
            <FaUserCircle className="text-4xl text-cyan-400" />

            <div className="text-left">
              <h4 className="text-sm font-semibold text-white">
                Tanisha Pandey
              </h4>

              <p className="text-xs text-slate-400">
                Safety Officer
              </p>
            </div>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;