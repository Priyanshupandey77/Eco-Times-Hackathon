import {
  Users,
  Radio,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

const kpis = [
  {
    title: "Workers Online",
    value: "248",
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    title: "Active Sensors",
    value: "1,024",
    icon: Radio,
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    title: "Critical Alerts",
    value: "12",
    icon: AlertTriangle,
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    title: "Safety Score",
    value: "96%",
    icon: ShieldCheck,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;

        return (
          <div
            key={kpi.title}
            className="
              rounded-2xl 
              bg-slate-900 
              border border-slate-700 
              p-6 
              transition-all duration-300 
              hover:-translate-y-1 
              hover:shadow-xl
            "
          >
            <div
              className={`
                w-12 h-12 rounded-xl 
                flex items-center justify-center 
                ${kpi.bg}
              `}
            >
              <Icon className={`w-6 h-6 ${kpi.color}`} />
            </div>

            <div className="mt-5">
              <p className="text-sm text-slate-400">
                {kpi.title}
              </p>
              <h3 className="mt-2 text-3xl font-bold text-white">
                {kpi.value}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}