"use client";

import { CircleMarker, Popup } from "react-leaflet";
import { useSearchParams } from "next/navigation";
import { mockZones } from "../../data/mockMapData";
import { getZoneColor } from "../../utils/severity";

export default function RiskZoneLayer() {
  const searchParams = useSearchParams();
  const selectedArea = searchParams.get("area");

  return (
    <>
      {mockZones.map((zone) => {
        const isActive = selectedArea === zone.area;

        return (
          <CircleMarker
            key={zone.id}
            center={[zone.lat, zone.lng]}
            radius={isActive ? 28 : 18}
            pathOptions={{
              color: isActive ? "blue" : getZoneColor(zone.severity),
              fillColor: getZoneColor(zone.severity),
              fillOpacity: isActive ? 0.9 : 0.6,
            }}
          >
            <Popup>
              <div className="text-sm">
                <p className="font-semibold">{zone.area}</p>
                <p>Issues: {zone.issues}</p>
                <p>Status: {zone.severity.toUpperCase()}</p>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </>
  );
}
