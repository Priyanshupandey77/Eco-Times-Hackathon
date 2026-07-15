const activities = [
  {
    time: "02:10 PM",
    message: "Worker Rahul entered Zone A",
  },
  {
    time: "02:15 PM",
    message: "Gas sensor detected abnormal value",
  },
  {
    time: "02:18 PM",
    message: "Maintenance request generated",
  },
  {
    time: "02:25 PM",
    message: "Safety officer acknowledged alert",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 h-[350px]">

      <h2 className="text-xl font-semibold text-white mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="border-l-2 border-cyan-500 pl-4"
          >
            <p className="text-cyan-400 text-sm">
              {activity.time}
            </p>

            <p className="text-slate-300 mt-1">
              {activity.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}