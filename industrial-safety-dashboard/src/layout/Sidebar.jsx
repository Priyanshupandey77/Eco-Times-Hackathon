import {
  FaTachometerAlt,
  FaMapMarkedAlt,
  FaExclamationTriangle,
  FaUsers,
  FaMicrochip,
  FaRobot,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: FaTachometerAlt, active: true },
    { name: "Plant Map", icon: FaMapMarkedAlt },
    { name: "Alerts", icon: FaExclamationTriangle },
    { name: "Workers", icon: FaUsers },
    { name: "Sensors", icon: FaMicrochip },
    { name: "AI Assistant", icon: FaRobot },
    { name: "Reports", icon: FaFileAlt },
    { name: "Settings", icon: FaCog },
  ];

  return (
    <aside className="w-72 h-screen bg-slate-950 border-r border-slate-800 flex flex-col px-5 py-6">
      {/* Logo */}
      <div className="flex items-center gap-4 px-3 mb-10">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
          <span className="text-xl font-bold text-white">S</span>
        </div>

        <div>
          <h1 className="text-xl font-bold text-white tracking-wide">
            SafeAI
          </h1>
          <p className="text-sm text-slate-400">
            Industrial Safety
          </p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-1.5">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`group flex items-center gap-4 w-full rounded-xl px-4 py-3 transition-all duration-300

              ${
                item.active
                  ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <Icon
                className={`text-lg transition-all duration-300 ${
                  item.active
                    ? "scale-110"
                    : "group-hover:scale-110 group-hover:text-cyan-400"
                }`}
              />

              <span className="text-[15px] font-medium tracking-wide">
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="my-8 border-t border-slate-800"></div>

      {/* AI Status Card */}
      <div className="rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 p-5 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-white">
            AI Status
          </h3>

          <div className="w-3 h-3 rounded-full bg-green-300 animate-pulse"></div>
        </div>

        <p className="mt-3 text-sm leading-6 text-cyan-100">
          All sensors are active and no critical incidents have been detected.
        </p>

        <button className="mt-5 w-full rounded-xl bg-white/15 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/25">
          View Details
        </button>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-6">
        <p className="text-center text-xs text-slate-500">
          SafeAI v1.0
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;