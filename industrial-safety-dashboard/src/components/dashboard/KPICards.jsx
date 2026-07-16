import { Users, Radio, AlertTriangle, ShieldCheck } from "lucide-react";

import { useDashboard } from "../../context/DashboardContext";
import Card from "../ui/Card";

export default function KPICards() {
  const stats = useDashboard();

  const kpis = [
    {
      title: "Workers Online",
      value: stats.workers,
      icon: Users,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      suffix: "",
    },
    {
      title: "Active Sensors",
      value: stats.sensors,
      icon: Radio,
      color: "text-green-400",
      bg: "bg-green-400/10",
      suffix: "",
    },
    {
      title: "Critical Alerts",
      value: stats.alerts,
      icon: AlertTriangle,
      color: "text-red-400",
      bg: "bg-red-400/10",
      suffix: "",
    },
    {
      title: "Safety Score",
      value: stats.safety,
      icon: ShieldCheck,
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      suffix: "%",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;

        return (
          <Card key={kpi.title} className="group p-6 hover:border-cyan-500">
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center ${kpi.bg}`}
            >
              <Icon
                className={`w-7 h-7 ${kpi.color} transition-transform duration-300 group-hover:scale-110`}
              />
            </div>

            <div className="mt-6">
              <h2 className="text-4xl font-bold text-white">
                {kpi.value}
                {kpi.suffix}
              </h2>

              <p className="mt-2 text-slate-400">{kpi.title}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
