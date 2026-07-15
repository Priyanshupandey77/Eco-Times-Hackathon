import KPICards from "../components/dashboard/KPICards";
import PlantSection from "../components/dashboard/PlantSection";

export default function Dashboard() {
  return (
    <div className="p-6 bg-slate-950 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-6">
        Dashboard
      </h1>

      <KPICards />

      <PlantSection />
    </div>
  );
}