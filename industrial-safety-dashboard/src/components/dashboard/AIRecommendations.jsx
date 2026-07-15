import {
  Bot,
  TriangleAlert,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const recommendations = [
  {
    icon: TriangleAlert,
    title: "Gas concentration increasing",
    description: "Inspect Zone A ventilation immediately.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance approved",
    description: "Machine 12 passed today's inspection.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: Lightbulb,
    title: "AI Suggestion",
    description: "Reduce worker traffic near Boiler Room.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

export default function AIRecommendations() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 h-[350px]">

      <div className="flex items-center gap-3 mb-6">
        <Bot className="text-cyan-400" size={28} />
        <h2 className="text-xl font-semibold text-white">
          AI Recommendations
        </h2>
      </div>

      <div className="space-y-4">
        {recommendations.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`rounded-xl p-4 border border-slate-700 ${item.bg}`}
            >
              <div className="flex gap-3">
                <Icon className={item.color} size={22} />

                <div>
                  <h3 className="text-white font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}