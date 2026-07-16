export default function MapLegend() {
  return (
    <div className="absolute bottom-4 right-4 z-[1000] bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl p-4 w-52 shadow-xl">

      <h3 className="text-white font-semibold mb-3">
        Legend
      </h3>

      <div className="space-y-2 text-sm">

        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-slate-300">
            Worker
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-slate-300">
            Sensor
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded bg-gray-400"></div>
          <span className="text-slate-300">
            Machine
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-slate-300">
            Hazard Zone
          </span>
        </div>

      </div>

    </div>
  );
}