export default function DashboardBackground() {
  return (
    <>
      {/* Top Glow */}
      <div className="fixed top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[180px] -z-10" />

      {/* Bottom Left */}
      <div className="fixed bottom-[-200px] left-[-150px] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[180px] -z-10" />

      {/* Bottom Right */}
      <div className="fixed bottom-[-250px] right-[-200px] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[180px] -z-10" />

      {/* Grid */}
      <div
        className="
          fixed inset-0 -z-20
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />
    </>
  );
}