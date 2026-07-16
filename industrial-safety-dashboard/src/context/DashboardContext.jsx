import { createContext, useContext, useEffect, useState } from "react";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [stats, setStats] = useState({
    workers: 248,
    sensors: 1024,
    alerts: 12,
    safety: 96,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        workers: prev.workers + Math.floor(Math.random() * 3 - 1),
        sensors: prev.sensors,
        alerts: Math.max(
          0,
          prev.alerts + Math.floor(Math.random() * 3 - 1)
        ),
        safety: Math.max(
          80,
          Math.min(
            100,
            prev.safety + Math.floor(Math.random() * 3 - 1)
          )
        ),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardContext.Provider value={stats}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
}