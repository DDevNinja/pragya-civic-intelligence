"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

import RiskZoneLayer from "./RiskZoneLayer";

const center: LatLngExpression = [19.076, 72.8777];

export default function CityMapClient() {
  const [ready, setReady] = useState(false);

  // ✅ Ensure map renders ONLY ONCE after hydration
  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <div className="h-[70vh] rounded overflow-hidden border">
      <MapContainer
        center={center}
        zoom={11}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <RiskZoneLayer />
      </MapContainer>
    </div>
  );
}
