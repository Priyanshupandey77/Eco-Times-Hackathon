import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { workers, sensors, machines } from "../../data/mapData";

export default function PlantMap() {
  return (
    <MapContainer
      center={[28.6139, 77.209]}
      zoom={18}
      className="h-full w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Workers */}
      {workers.map((worker) => (
        <Marker key={worker.id} position={worker.position}>
          <Popup>
            <b>{worker.name}</b>
            <br />
            Status: {worker.status}
          </Popup>
        </Marker>
      ))}

      {/* Sensors */}
      {sensors.map((sensor) => (
        <Marker key={sensor.id} position={sensor.position}>
          <Popup>{sensor.type}</Popup>
        </Marker>
      ))}

      {/* Machines */}
      {machines.map((machine) => (
        <Marker key={machine.id} position={machine.position}>
          <Popup>{machine.name}</Popup>
        </Marker>
      ))}

      {/* Hazard Zone */}
      <Circle
        center={[28.6141, 77.2097]}
        radius={35}
        pathOptions={{
          color: "red",
          fillColor: "red",
          fillOpacity: 0.3,
        }}
      />
    </MapContainer>
  );
}