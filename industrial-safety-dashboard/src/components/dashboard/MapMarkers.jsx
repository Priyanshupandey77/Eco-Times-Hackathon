import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import {
  HardHat,
  Radio,
  Cog,
  TriangleAlert,
} from "lucide-react";

const createIcon = (Icon, color) =>
  L.divIcon({
    html: renderToStaticMarkup(
      <div
        style={{
          width: 34,
          height: 34,
          background: "#0f172a",
          borderRadius: "999px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: `2px solid ${color}`,
          boxShadow: "0 0 15px rgba(0,0,0,.4)",
        }}
      >
        <Icon size={18} color={color} />
      </div>
    ),
    className: "",
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });

export const workerIcon = createIcon(HardHat, "#22c55e");
export const sensorIcon = createIcon(Radio, "#3b82f6");
export const machineIcon = createIcon(Cog, "#9ca3af");
export const hazardIcon = createIcon(TriangleAlert, "#ef4444");