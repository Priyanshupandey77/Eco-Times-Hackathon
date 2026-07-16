import { Circle, Popup } from "react-leaflet";
import { factoryZones } from "../../data/factoryLayout";

export default function FactoryOverlay() {
  return (
    <>
      {factoryZones.map((zone) => (
        <Circle
          key={zone.id}
          center={zone.center}
          radius={zone.radius}
          pathOptions={{
            color: zone.color,
            fillColor: zone.fillColor,
            fillOpacity: 0.35,
            weight: 2,
          }}
        >
          <Popup>
            <div className="space-y-1">
              <h3 className="font-bold">{zone.name}</h3>
              <p>Monitoring Zone</p>
            </div>
          </Popup>
        </Circle>
      ))}
    </>
  );
}