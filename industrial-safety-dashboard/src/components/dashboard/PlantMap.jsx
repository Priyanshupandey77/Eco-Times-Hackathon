import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import FactoryOverlay from "./FactoryOverlay";
import MapStatus from "./MapStatus";
import MapLegend from "./MapLegend";

import { workerIcon, sensorIcon, machineIcon } from "./MapMarkers";

import { workers, sensors, machines } from "../../data/mapData";

export default function PlantMap() {
  return (
    <div className="relative h-full w-full">
      {/* Floating Cards */}
      <MapStatus />
      <MapLegend />

      <MapContainer
        center={[28.6139, 77.209]}
        zoom={18}
        scrollWheelZoom={true}
        className="h-full w-full rounded-xl z-0"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Factory Zones */}
        <FactoryOverlay />

        {/* Workers */}
        {workers.map((worker) => (
          <Marker key={worker.id} position={worker.position} icon={workerIcon}>
            <Popup>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">{worker.name}</h3>

                <p>
                  Status:
                  <span className="text-green-600 font-semibold ml-1">
                    {worker.status}
                  </span>
                </p>

                <p>ID: #{worker.id}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Sensors */}
        {sensors.map((sensor) => (
          <Marker key={sensor.id} position={sensor.position} icon={sensorIcon}>
            <Popup>
              <div className="space-y-1">
                <h3 className="font-bold">{sensor.type}</h3>

                <p>Status: Active</p>

                <p>Reading: Normal</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Machines */}
        {machines.map((machine) => (
          <Marker
            key={machine.id}
            position={machine.position}
            icon={machineIcon}
          >
            <Popup>
              <div className="space-y-1">
                <h3 className="font-bold">{machine.name}</h3>

                <p>Health: Good</p>

                <p>Running</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
