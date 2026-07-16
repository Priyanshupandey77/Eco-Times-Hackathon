import PlantMap from "./PlantMap";
import Card from "../ui/Card";
import {
  Activity,
  Users,
  Radio,
  TriangleAlert,
} from "lucide-react";
import FactoryMap from "./FactoryMap";

export default function PlantSection() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

      {/* Plant Monitoring */}

      <Card className="xl:col-span-2 p-0 overflow-hidden">

        {/* Header */}

        <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Factory Digital Twin
            </h2>

            <p className="text-slate-400 mt-1">
              Real-time Industrial Monitoring
            </p>

          </div>

          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-xl">

            <Activity
              className="text-green-400"
              size={18}
            />

            <span className="text-green-400 font-semibold">
              LIVE
            </span>

          </div>

        </div>

        {/* Map */}

        <div className="h-[520px]">
          <FactoryMap />
        </div>

        {/* Bottom Status */}

        <div className="grid grid-cols-4 border-t border-slate-800">

          <Status
            icon={<Users size={18} />}
            value="18"
            title="Workers"
            color="text-cyan-400"
          />

          <Status
            icon={<Radio size={18} />}
            value="42"
            title="Sensors"
            color="text-green-400"
          />

          <Status
            icon={<TriangleAlert size={18} />}
            value="2"
            title="Hazards"
            color="text-red-400"
          />

          <Status
            icon={<Activity size={18} />}
            value="99.2%"
            title="Uptime"
            color="text-yellow-400"
          />

        </div>

      </Card>

      {/* Alerts */}

      <Card className="p-6">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Live Alerts
            </h2>

            <p className="text-slate-400">
              Priority Events
            </p>

          </div>

          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            3 New
          </span>

        </div>

        <div className="mt-6 space-y-4">

          <Alert
            color="red"
            title="Critical Gas Leak"
            place="Boiler Room"
            time="2 min ago"
          />

          <Alert
            color="yellow"
            title="High Temperature"
            place="Machine Line"
            time="5 min ago"
          />

          <Alert
            color="blue"
            title="Maintenance Started"
            place="Warehouse"
            time="9 min ago"
          />

        </div>

      </Card>

    </div>
  );
}

function Status({
  icon,
  value,
  title,
  color,
}) {
  return (
    <div className="p-5 border-r last:border-r-0 border-slate-800">

      <div className={`mb-2 ${color}`}>
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-white">
        {value}
      </h3>

      <p className="text-slate-400 text-sm">
        {title}
      </p>

    </div>
  );
}

function Alert({
  color,
  title,
  place,
  time,
}) {
  const colors = {
    red: "border-red-500 bg-red-500/10 text-red-400",
    yellow:
      "border-yellow-500 bg-yellow-500/10 text-yellow-400",
    blue:
      "border-cyan-500 bg-cyan-500/10 text-cyan-400",
  };

  return (
    <div
      className={`border rounded-xl p-4 ${colors[color]}`}
    >
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="text-sm mt-1">
        {place}
      </p>

      <p className="text-xs mt-2 opacity-70">
        {time}
      </p>

    </div>
  );
}