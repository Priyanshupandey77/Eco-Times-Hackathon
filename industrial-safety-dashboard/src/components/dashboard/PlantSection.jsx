import PlantMap from "./PlantMap";

export default function PlantSection() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
      {/* Plant Map */}
      <div className="xl:col-span-2 bg-slate-900 border border-slate-700 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">
            Plant Monitoring
          </h2>

          <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
            ● Live
          </span>
        </div>

        <div className="h-[450px] rounded-xl overflow-hidden border border-slate-700">
          <PlantMap />
        </div>
      </div>

      {/* Live Alerts */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">
          Live Alerts
        </h2>

        <div className="space-y-4">

          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
            <h3 className="text-red-400 font-semibold">
              🚨 Critical Gas Leak
            </h3>

            <p className="text-slate-400 text-sm mt-1">
              Zone A
            </p>

            <p className="text-xs text-slate-500 mt-2">
              2 minutes ago
            </p>
          </div>

          <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
            <h3 className="text-yellow-400 font-semibold">
              ⚠ High Temperature
            </h3>

            <p className="text-slate-400 text-sm mt-1">
              Boiler Room
            </p>

            <p className="text-xs text-slate-500 mt-2">
              8 minutes ago
            </p>
          </div>

          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4">
            <h3 className="text-blue-400 font-semibold">
              🔧 Maintenance Started
            </h3>

            <p className="text-slate-400 text-sm mt-1">
              Machine 12
            </p>

            <p className="text-xs text-slate-500 mt-2">
              12 minutes ago
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}