const sensors = [
  {
    name: "Gas Sensor",
    value: 98,
    color: "bg-green-500",
  },
  {
    name: "Temperature",
    value: 91,
    color: "bg-cyan-500",
  },
  {
    name: "Pressure",
    value: 82,
    color: "bg-yellow-500",
  },
  {
    name: "Humidity",
    value: 95,
    color: "bg-blue-500",
  },
];

export default function SensorHealth() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 h-[380px]">

      <h2 className="text-xl font-semibold text-white mb-6">
        Sensor Health
      </h2>

      <div className="space-y-6">

        {sensors.map((sensor) => (
          <div key={sensor.name}>

            <div className="flex justify-between mb-2">
              <span className="text-slate-300">
                {sensor.name}
              </span>

              <span className="text-white font-semibold">
                {sensor.value}%
              </span>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-3">
              <div
                className={`${sensor.color} h-3 rounded-full`}
                style={{
                  width: `${sensor.value}%`,
                }}
              />
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}