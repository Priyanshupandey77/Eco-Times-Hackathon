import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "08:00", risk: 15 },
  { time: "09:00", risk: 28 },
  { time: "10:00", risk: 42 },
  { time: "11:00", risk: 35 },
  { time: "12:00", risk: 68 },
  { time: "01:00", risk: 82 },
  { time: "02:00", risk: 55 },
];

export default function RiskChart() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 h-[380px]">

      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Risk Trend
          </h2>

          <p className="text-sm text-slate-400">
            Last 7 Hours
          </p>
        </div>

        <span className="text-red-400 font-semibold">
          High Risk
        </span>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" stroke="#334155" />

          <XAxis
            dataKey="time"
            stroke="#94a3b8"
          />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="risk"
            stroke="#06b6d4"
            strokeWidth={4}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}