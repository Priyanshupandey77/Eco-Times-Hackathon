import { Users, Radio, TriangleAlert } from "lucide-react";

export default function MapStatus() {
  return (
    <div className="absolute top-4 left-4 z-[1000] bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl p-4 w-56 shadow-xl">
      <h3 className="text-white font-semibold mb-3">
        Factory Status
      </h3>

      <div className="space-y-3">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users size={18} className="text-cyan-400" />
            <span className="text-slate-300">
              Workers
            </span>
          </div>

          <span className="text-white font-bold">
            18
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio size={18} className="text-green-400" />
            <span className="text-slate-300">
              Sensors
            </span>
          </div>

          <span className="text-white font-bold">
            42
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TriangleAlert size={18} className="text-red-400" />
            <span className="text-slate-300">
              Hazards
            </span>
          </div>

          <span className="text-white font-bold">
            2
          </span>
        </div>

      </div>
    </div>
  );
}