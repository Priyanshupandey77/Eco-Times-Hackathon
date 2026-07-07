import Dashboard from "../pages/Dashboard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ Children }) => {
  return (
    <div className="flex h-screen bg-slate-950 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Dashboard/>
        <main className="flex-1 overflow-auto">{Children}</main>
      </div>
    </div>
  );
};
export default DashboardLayout;
