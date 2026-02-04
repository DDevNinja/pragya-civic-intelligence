"use client";

import { CircleMarker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getZoneColor } from "../../utils/severity";
import { useCity } from "../../context/CityContext";

type Zone = {
  id: number;
  area: string;
  city: string;
  severity: string;
  issues: number;
  lat: number;
  lng: number;
};

export default function RiskZoneLayer() {
  const [zones, setZones] = useState<Zone[]>([]);
  const searchParams = useSearchParams();
  const selectedArea = searchParams.get("area");
  const { city } = useCity(); // 🌍 GLOBAL CITY

  // 🔥 Fetch zones based on selected city
  useEffect(() => {
    fetch(`/api/map?city=${city}`)
      .then((res) => res.json())
      .then((data) => setZones(data.data));
  }, [city]);

  return (
    <>
      {zones.map((zone) => {
        const isActive = selectedArea === zone.area;

        return (
          <CircleMarker
            key={zone.id}
            center={[zone.lat, zone.lng]}
            radius={isActive ? 28 : 18}
            pathOptions={{
              color: isActive ? "blue" : getZoneColor(zone.severity),
              fillColor: getZoneColor(zone.severity),
              fillOpacity: 0.6,
            }}
          >
            <Popup>
              <div className="text-sm">
                <p className="font-semibold">{zone.area}</p>
                <p>{zone.city}</p>
                <p>Issues: {zone.issues}</p>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </>
  );
}
