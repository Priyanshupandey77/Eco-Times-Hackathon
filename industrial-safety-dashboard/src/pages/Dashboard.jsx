import AIRecommendations from "../components/dashboard/AIRecommendations";
import KPICards from "../components/dashboard/KPICards";
import PlantSection from "../components/dashboard/PlantSection";
import RecentActivity from "../components/dashboard/RecentActivity";
import RiskChart from "../components/dashboard/RiskChart";
import SensorHealth from "../components/dashboard/SensorHealth";
import DashboardBackground from "../components/ui/DashboardBackground";

export default function Dashboard() {
  return (
    <>
    <DashboardBackground/>
    <div className="relative bg-slate-950 min-h-screen p-8">
    <div className="bg-slate-950 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Dashboard</h1>

      <KPICards />

      <PlantSection />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
        <div className="xl:col-span-2">
          <RiskChart />
        </div>

        <div>
          <SensorHealth />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <AIRecommendations />

        <RecentActivity />
      </div>
    </div>
    </div>
    </>
  );
}
